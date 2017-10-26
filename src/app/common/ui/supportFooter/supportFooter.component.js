import { SupportFooterController } from './supportFooter.controller';
import template from './supportFooter.html';

export const supportFooterComponent = {
  name: 'supportFooter',
  restrict: 'E',
  template,
  controller: SupportFooterController,
  controllerAs: 'vm',
  bindings: {}
};
