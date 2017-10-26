import { <%= upperCaseName %>Controller } from './<%= name %>.controller';
import template from './<%= name %>.html';

export const <%= name %>Component = {
  name: '<%= name %>',
  restrict: 'E',
  template,
  controller: <%= upperCaseName %>Controller,
  controllerAs: 'vm',
  bindings: {}
};
