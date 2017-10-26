import { ApiRequest } from '../../api/request';
import { DataResponse } from '../response/dataResponse';

export class LoginService extends ApiRequest {
  constructor($http, $q, appData) {
    'ngInject';
    super({ $http, $q, appData });
  }

  searchBanks(search) {
    return this.$http({
      method: 'GET',
      url: `/api/v0/banks/${search}?limit=10`,
      error: {
        silent: true
      }
    })
    .then(DataResponse.transform('data.data.banks'));
  }

  login(bank, credentials) {
    return this.$q.when({
      energy: 1230.23,
      dsl: 279.50
    })
    .then(user => {
      this.appData.user = user;
      return user;
    });
  }
}
