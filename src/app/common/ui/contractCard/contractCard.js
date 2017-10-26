import { app } from '../../../bootstrap/core';
import { contractCardComponent } from './contractCard.component';

angular.module(app.name)
  .component(contractCardComponent.name, contractCardComponent);
