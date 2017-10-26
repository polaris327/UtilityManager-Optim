import { app } from '../../../bootstrap/core';
import { loadingComponent } from './loading.component';

angular.module(app.name)
  .component(loadingComponent.name, loadingComponent);
