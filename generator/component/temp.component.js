import { <%= upperCaseName %>Controller } from './<%= name %>.controller';
import template from './<%= name %>.html';
// // import './<%= name %>.scss';

export const <%= name %>Component = {
  name: '<%= name %>Component',
  restrict: 'E',
  template,
  controller: <%= upperCaseName %>Controller,
  controllerAs: 'vm',
  bindings: {}
};
