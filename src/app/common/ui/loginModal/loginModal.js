import { app } from '../../../bootstrap/core';
import { loginModalComponent } from './loginModal.component';

angular.module(app.name)
  .component(loginModalComponent.name, loginModalComponent);
