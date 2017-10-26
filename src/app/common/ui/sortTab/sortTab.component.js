import { SortTabController } from './sortTab.controller';
import template from './sortTab.html';

export const sortTabComponent = {
  name: 'sortTab',
  restrict: 'E',
  template,
  controller: SortTabController,
  controllerAs: 'vm',
  bindings: {
    values: '<',
    onSort: '&'
  }
};
