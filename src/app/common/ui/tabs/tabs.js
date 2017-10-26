import { app } from '../../../bootstrap/core';
import { tabsComponent } from './tabs.component';

angular.module(app.name)
  .component(tabsComponent.name, tabsComponent);
