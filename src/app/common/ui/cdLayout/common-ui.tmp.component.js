import { CdLayoutController } from './cdLayout.controller';
import template from './cdLayout.html';

export const cdLayoutComponent = {
  name: 'cdLayoutComponent',
  restrict: 'E',
  template,
  controller: CdLayoutController,
  controllerAs: 'vm',
  bindings: {}
};
