import { IconController } from './icon.controller';
import template from './icon.html';

export const iconComponent = {
  name: 'icon',
  restrict: 'E',
  template,
  controller: IconController,
  controllerAs: 'vm',
  bindings: {
    iconClass: '@'
  }
};
