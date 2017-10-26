import template from './appHeader.html';
import { AppHeaderController } from './appHeader.controller';

export const appHeaderComponent = {
  name: 'appHeader',
  restrict: 'E',
  controller: AppHeaderController,
  controllerAs: 'vm',
  bindings: {
    absoluteHeader: '<',
    showNavbar: '<'
  },
  template
};
