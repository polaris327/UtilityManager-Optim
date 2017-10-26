import { app } from '../../../bootstrap/core';
import { cdLayoutComponent } from './cdLayout.component';

angular.module(app.name)
  .component(cdLayoutComponent.name, cdLayoutComponent);
