import { app } from '../../../bootstrap/core';
import { configuratorComponent } from './configurator.component';

angular.module(app.name)
  .component(configuratorComponent.name, configuratorComponent);
