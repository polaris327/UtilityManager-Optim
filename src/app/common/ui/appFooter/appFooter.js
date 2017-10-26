import { app } from '../../../bootstrap/core';
import { appFooterComponent } from './appFooter.component';

angular.module(app.name)
  .component(appFooterComponent.name, appFooterComponent);
