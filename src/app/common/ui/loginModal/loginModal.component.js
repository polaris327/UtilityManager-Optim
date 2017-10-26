import { LoginModalController } from './loginModal.controller';
import template from './loginModal.html';

export const loginModalComponent = {
  name: 'loginModal',
  restrict: 'E',
  template,
  controller: LoginModalController,
  controllerAs: 'vm',
  bindings: {
    open: '=',
    onLogin: '&'
  }
};
