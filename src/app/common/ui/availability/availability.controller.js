import { BaseController } from '../../base/controller';

export class AvailabilityController extends BaseController {
  constructor($scope, controllerService, energyService) {
    'ngInject';
    super({ $scope, controllerService, energyService });
  }

  $onInit() {
    if (!this.model) {
      this.model = {};
    }

    this.$scope.$watch('vm.model.postCode', () => this.searchCities());
    this.$scope.$watch('vm.model.cityId', () => this.searchStreets());
    this.$scope.$watch('vm.model.streetId', () => this.selectStreet());
  }

  searchCities() {
    const { postCode } = this.model;
    this.model.cityId = null;
    if (postCode && postCode.length === 5) {
      return this.energyService
        .availabilityWithPostCode(postCode)
        .then(cities => {
          if (!cities) return;

          this.citiesSource = {
            selectables: cities,
            selectKey: 'cityName',
            modelKey: 'cityId'
          };
        })
    }
    this.streetsSource = null;
    this.citiesSource = null;
  }
  
  searchStreets() {
    const { postCode, cityId } = this.model;
    this.model.streetId = null;
    if (cityId) {
      return this.energyService
        .availabilityWithCity(postCode, cityId)
        .then(streets => {
          if (!streets) return;

          this.streetsSource = {
            selectables: streets,
            selectKey: 'streetName',
            modelKey: 'streetId'
          };
        })
    }
    this.streetsSource = null;
  }
  
  selectStreet() {
    const { postCode, cityId, streetId } = this.model;
    if (streetId) {
      return this.energyService
        .availabilityWithStreet(postCode, cityId, streetId)
        .then(data => {
          this.streetSelected({ data });
        });
    }
  }
}
