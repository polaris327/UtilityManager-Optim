import { TabTableController } from './tabTable.controller';
import template from './tabTable.html';

export const tabTableComponent = {
  name: 'tabTable',
  restrict: 'E',
  template,
  controller: TabTableController,
  controllerAs: 'vm',
  bindings: {
    rows: '<',
    template: '@'
  }
};
