import { BaseController } from '../../base/controller';

const Tarif = [{
  value: 'KS - einfach gut'
}];

export class ContractSummaryController extends BaseController {
  constructor($scope, controllerService, energyService) {
    'ngInject';
    super({ controllerService, energyService });

    $scope.$watch('vm.contract.tariff', () => {
      this.selectedTariff();
    });

    $scope.$watch('vm.contract.supplier', () => {
      const { $timeout } = controllerService;
      $timeout(() => this.selectedSupplier());
    });

  }

  $onInit() {
    // load the suppliers from backend
    this.energyService.suppliers()
      .then(suppliers => {
        this.tempSuppliers = suppliers;
        this.loaded = true;

        if (this.contract.supplier) {
          this.setSuppliers();
        }
      });
  }

  loadOptions(event) {
    if (event.target.value.length >= 2) {
      this.setSuppliers();
    }
  }

  setSuppliers() {
    this.supplierTypeOptions = {
      selectables: this.tempSuppliers,
      selectKey: 'name',
      modelKey: 'id'
    };
  }

  selectedSupplier() {
    if (this.contract.supplier) {
      const { supplier } = this.contract;
      this.energyService.tariffs(supplier)
        .then(tariffs => this.setTariffs(tariffs));
    }
  }

  selectedTariff() {
    const { tariff } = this.contract;
    if (tariff) {
      this.tariffChange({ tariff });
    }
  }

  setTariffs(tariffs) {
    const { $timeout } = this.controllerService;

    $timeout(() => {
      this.tariffTypeOptions = {
        selectables: tariffs,
        selectKey: 'name',
        modelKey: 'tarifID'
      };
    });
  }
}
