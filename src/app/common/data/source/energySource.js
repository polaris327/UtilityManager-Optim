import _ from 'lodash';
import { ApiRequest } from '../../api/request';
import { DataResponse } from '../response/dataResponse';
import { Offer } from '../models/offer.model';
import { CompareMode } from '../../../components/home/home.constants';
import EnergyResponse from '../mocks/energy.resp';

export class EnergyService extends ApiRequest {
  get hasLocations() {
    return !!(this.locations && this.locationsFor.length);
  }

  constructor($http, $timeout, $q, $httpParamSerializer) {
    'ngInject';
    super({ $http, $timeout, $q, $httpParamSerializer });
  }

  setCompareType(type) {
    this.compareType = type;
  }

  compareDsl(data, locationIdentifier) {
    console.log(data, locationIdentifier);
    return this.$http({
      method: 'GET',
      url:`/verivox/api/v0/compareDSL?phonePrefix=${locationIdentifier}`
    })
    .then(DataResponse.transform('data.offerItems'));
  }

  compare(data, locationIdentifier) {
    return this.$http({
      method: 'POST',
      url: `/verivox/api/v0/calculator/${this.compareType}/${locationIdentifier}`,
      data
    })
    .then(DataResponse.transform('data.offers'));
  }

  locationsFor(postcode) {
    return this.$http({
      method: 'GET',
      url: `/verivox/api/v0/location/${this.compareType || CompareMode.Electricity}/${postcode}`
    })
    .then(DataResponse.transform('data.locations'))
    .then(locations => this.locations = locations);
  }

  suppliers() {
    return this.$http({
      method: 'GET',
      url: `/verivox/api/v0/providers/${this.compareType}`
    }).then(DataResponse.transform('data.providers'));
  }

  tariffs(id) {
    return this.$http({
      method: 'GET',
      url: `/verivox/api/v0/tariffs/${this.compareType}/${id}`
    }).then(DataResponse.transform('data.tarifs'));
  }

  filter(data, postcode) {
    return this.$http({
      method: 'POST',
      url: `/verivox/api/v0/calculator/${this.compareType}/${postcode}`,
      data
    });
  }
  
  offerInfo(dest) {
    return this.$http({
      method: 'GET',
      url: `/verivox/api/v0/offerInfo/${this.compareType}/${dest}`
    })
    .then(DataResponse.transform('data'))
    .then(resources => {
      return {
        labels: _.map(resources, r => `${r.text} (${r.percent}%)`),
        data: _.map(resources, 'percent')
      };
    });
  }
  
  availability(queryObject) {
    const query = this.$httpParamSerializer(queryObject);
    return this.$http({
      method: 'GET',
      url: `/verivox/api/v0/availability?${query}`
    });
  }
  
  availabilityWithPostCode(postCode) {
    return this.availability({postCode})
      .then(DataResponse.transform('data.geoItems'));
  }
  
  availabilityWithCity(postCode, cityId) {
    return this.availability({postCode, cityId})
      .then(DataResponse.transform('data.streets'));
  }
  
  availabilityWithStreet(postCode, cityId, streetId) {
    return this.availability({postCode, cityId, streetId})
      .then(DataResponse.transform('data'));
  }

  cheapestRates(data) {
    return this.$http({
      method: 'POST',
      url: `/verivox/api/v0/cheapestRates`,
      data
    })
    .then(DataResponse.transform('data'));
  }
}
