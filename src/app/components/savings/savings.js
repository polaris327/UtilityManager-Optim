import { app } from '../../bootstrap/core';
import { savingsState } from './savings.state';
import { savingsComponent } from './savings.component';

angular.module(app.name)
  .config(savingsState)
  .component(savingsComponent.name, savingsComponent);
