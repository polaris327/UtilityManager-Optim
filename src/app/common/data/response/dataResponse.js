import _ from 'lodash';

export class DataResponse {
  constructor() {

  }

  static transform(search) {
    return (response) => {
      return _.get(response, search);
    };
  }
}
