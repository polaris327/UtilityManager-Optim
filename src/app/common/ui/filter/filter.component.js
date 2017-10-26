import { FilterController } from './filter.controller';
import template from './filter.html';

export const filterComponent = {
  name: 'filter',
  restrict: 'E',
  template,
  controller: FilterController,
  controllerAs: 'vm',
  bindings: {
    onSubmit: '&',
    filterModel: '<'
  }
};
