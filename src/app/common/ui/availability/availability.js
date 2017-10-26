import { app } from '../../../bootstrap/core';
import { availabilityComponent } from './availability.component';

angular.module(app.name)
  .component(availabilityComponent.name, availabilityComponent);
