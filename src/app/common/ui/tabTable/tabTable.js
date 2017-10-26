import { app } from '../../../bootstrap/core';
import { tabTableComponent } from './tabTable.component';

angular.module(app.name)
  .component(tabTableComponent.name, tabTableComponent);
