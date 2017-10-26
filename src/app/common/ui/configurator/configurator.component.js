import { ConfiguratorController } from './configurator.controller';
import template from './configurator.html';
import './partials/locations.tpl.html';

export const configuratorComponent = {
  name: 'configurator',
  restrict: 'E',
  transclude: true,
  template,
  controller: ConfiguratorController,
  controllerAs: 'vm',
  bindings: {
    type: '<',
    action: '&',
    form: '=?',
    model: '=?',
    hideButton: '<'
  }
};
