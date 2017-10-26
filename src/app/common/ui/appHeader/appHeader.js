import { app } from '../../../bootstrap/core';
import { appHeaderComponent } from './appHeader.component';
import '../navbar/navbar';

angular.module(app.name)
  .component(appHeaderComponent.name, appHeaderComponent);
