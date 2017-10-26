import { ApiRequest } from '../../api/request';

export class AdminService extends ApiRequest {
  constructor($http, $q, User) {
    'ngInject';
    super({ $http, $q, User });
  }

  findById(userId) {
    return this.$http({
      method: 'GET',
      url: '/api/v0/admin/users/' + userId
    });
  }

  getUsers() {
    return this.$http({
      method: 'GET',
      url: '/api/v0/admin/users'
    });
  }

  getRoles() {
    return this.$http({
      method: 'GET',
      url: '/api/v0/admin/users/roles'
    });
  }

  createUser(user) {
    return this.$http({
      method: 'POST',
      data: user,
      url: '/api/v0/admin/users'
    });
  }

  updateUser(user) {
    return this.$http({
      method: 'PUT',
      data: user,
      url: '/api/v0/admin/users/' + user._id
    });
  }

  deleteUser(user) {
    return this.$http({
      method: 'DELETE',
      url: '/api/v0/admin/users/' + user._id
    });
  }

  resetPassword(user) {
    return this.$http({
      method: 'POST',
      url: '/api/v0/admin/users/' + user._id + '/resetPassword'
    });
  }
}
