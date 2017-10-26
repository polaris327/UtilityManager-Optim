import template from './app.html';
import controller from './app.controller';

export const appComponent = {
  name: 'app',
  restrict: 'E',
  template,
  controller,
  controllerAs: 'vm'
};
