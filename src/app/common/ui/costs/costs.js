import { app } from '../../../bootstrap/core';
import { costsComponent } from './costs.component';

angular.module(app.name)
  .component(costsComponent.name, costsComponent);
