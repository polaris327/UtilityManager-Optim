'use strict';

export class LoginResponse {
  constructor() {

  }

  static loginTo(userFactory) {
    return (response, statsus, headers, config) => {
      // Get jwtoken from respons header
      let jwtoken = response.headers('jwtoken');
      if (!jwtoken && response) {
        // Fallback to response body
        jwtoken = response.data && response.data.jwtoken;
      }
      if (jwtoken) {
        userFactory.login(jwtoken);
      }
      return response;
    };
  }
}
