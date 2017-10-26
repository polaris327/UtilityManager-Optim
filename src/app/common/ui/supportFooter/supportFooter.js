import { app } from '../../../bootstrap/core';
import { supportFooterComponent } from './supportFooter.component';

angular.module(app.name)
  .component(supportFooterComponent.name, supportFooterComponent);
