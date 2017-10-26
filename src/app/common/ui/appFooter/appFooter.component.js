import { AppFooterController } from './appFooter.controller';
import template from './appFooter.html';

export const appFooterComponent = {
  name: 'appFooter',
  restrict: 'E',
  template,
  controller: AppFooterController,
  controllerAs: 'vm',
  bindings: {
    showSupport: '<',
    showLinks: '<'
  }
};
