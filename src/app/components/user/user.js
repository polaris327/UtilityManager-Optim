import { app } from '../../bootstrap/core';
import { userState } from './user.state';
import { userComponent } from './user.component';

angular.module(app.name)
  .config(userState)
  .component(userComponent.name, userComponent);
