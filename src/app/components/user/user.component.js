import { UserController } from './user.controller';
import template from './user.html';

export const userComponent = {
  name: 'userComponent',
  restrict: 'E',
  template,
  controller: UserController,
  controllerAs: 'vm',
  bindings: {}
};
