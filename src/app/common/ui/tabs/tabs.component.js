import { TabsController } from './tabs.controller';
import template from './tabs.html';

export const tabsComponent = {
  name: 'tabs',
  restrict: 'E',
  template,
  controller: TabsController,
  controllerAs: 'vm',
  bindings: {
    tabs: '<',
    onSelect: '&'
  }
};
