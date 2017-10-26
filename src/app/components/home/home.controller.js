import { BaseController } from '../../common/base/controller';
import { Offer } from '../../common/data/models/offer.model';
import { DslOffer } from '../../common/data/models/dslOffer.model';
import { CompareMode, SortTabs } from './home.constants'

export class HomeController extends BaseController {
  get sortTabs() {
    return SortTabs[this.type];
  }

  get allOffers() {
    return this._ao && _.map(this._ao, o => {
      if (this.type === CompareMode.Dsl) {
        return new DslOffer(o)
      }
      return new Offer(o)
    }).filter(o => o.show);
  }

  get showContractSummary() {
    return this.type !== CompareMode.Dsl;
  }

  get showAvailability() {
    return this.type === CompareMode.Dsl;
  }

  set allOffers(value) {
    this.appData.setOffers(this.type, value);
    this._ao = value;
  }

  constructor($scope, $window, controllerService, filterService, energyService, appData) {
    'ngInject';
    super({ controllerService, filterService, energyService, appData });

    this.currentPage = 1;
    this.entriesPerPage = 10;
    if ($window.innerWidth > 768)
    {
      this.showMobileSidebar = false;
    } else {
      this.showMobileSidebar = true;
    }

    $scope.$watch('vm.contract', contract => {
      this.appData.setContract(this.type, contract);
    }, true);

    angular.element($window).on('resize', () => {
      if ($window.innerWidth > 768 && this.showMobileSidebar) {
        this.$timeout(() => $scope.$broadcast('hideSideBar'));
      } else if ($window.innerWidth <= 768 && !this.showMobileSidebar) {
        this.$timeout(() => $scope.$broadcast('showSideBar'));
      }
    });
    
    $scope.$on('toggleSideBar', () => {
      console.log('toggle')
      this.sidebarVisible = !this.sidebarVisible;
    });

    $scope.$on('showSideBar', () => {
      this.showMobileSidebar = true;
    });

    $scope.$on('hideSideBar', () => {
      this.showMobileSidebar = false;
    });
  }

  $onInit() {
    const { type } = this.$stateParams;
    if (!type) {
      return this.$state.go('app.home', { type: CompareMode.Electricity });
    }

    this.setCompareType(this.$stateParams.type);
    const configuration = this.appData.configuration;
    if (configuration) {
      this.configure(configuration.usage, configuration.area, !this.allOffers || !this.allOffers.length);
      this.extendedConfigurator = true;
    }
  }

  setFilterModel(value) {
    this.appData.setFilter(this.type, value);
    this.filterModel = value;
  }

  getFilterModel() {
    return this.appData.getFilter(this.type) || this.filterService.getDefaultFilterValues(this.type);
  }

  getAllOffers() {
    return this.appData.getOffers(this.type);
  }

  getContract() {
    return this.appData.getContract(this.type) || {};
  }

  configure(usage, area, compare = true) {
    this.appData.configuration = this.configuration = _.merge(this.appData.configuration || {}, {
      usage,
      area
    });
    this.setUser();
    if (compare) {
      this.compare();
    }
  }

  setUser() {
    const { usage, area } = this.configuration;

    this.user = {
      usage: `${usage}`,
      location: `${area.postCode} ${area.fullName || ''}`
    };
  }

  compare() {
    const { filterModel, contract } = this;
    const { usage, area } = this.configuration;
    const model = this.filterService.formatModel(filterModel);
    this.currentPage = 1;

    const data = _.merge({}, model || {}, {
      usage: {
        annualTotal: parseInt(usage)
      },
      paolaLocationID: area.locationID || ''
    });

    if (contract && contract.tariff) {
      data.benchmarkTariffId = parseInt(contract.tariff);
    }

    const compare = (data, area) => {
      return this.type === CompareMode.Dsl
        ? this.energyService.compareDsl(data, area.code)
        : this.energyService.compare(data, area.postCode);
    };

    return compare(data, area)
      .busy(this, 'compareBusy')
      .then(this.compareSuccess.bind(this));
  }

  compareSuccess(offers) {
    this.compared = true;
    this.allOffers = offers;
    this.update();
  }

  update() {
    const start = (this.currentPage - 1) * this.entriesPerPage;
    this.offers = this.allOffers && _.slice(this.allOffers, start, start + this.entriesPerPage);
  }

  sort(value) {
    const sortType = _.includes(SortTabs.descending, value) ? 'desc' : 'asc';
    this.allOffers = _.orderBy(this.allOffers, [value], [sortType]);
    this.currentPage = 1;
    this.update();
  }

  tariffChange(tariff) {
    if (this.tariff !== tariff) {
      this.tariff = tariff;
      this.compare()
    }
  }

  filter(filterModel) {
    this.setFilterModel(filterModel);
    if (this.compared) {
      this.compare();
    }
  }

  setCompareType(type) {
    this.type = type;
    this.appData.specifyConfiguration(type);
    this.energyService.setCompareType(type);
    this.filterModel = this.getFilterModel();
    this.filterService.activate(type, this.filterModel);
    this.allOffers = this.getAllOffers();
    this.contract = this.getContract();
    this.compared = !!this.allOffers;
    this.update();
  }

  closeNav() {
    this.sidebarVisible = false;
  }
}
