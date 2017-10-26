import { app } from '../../bootstrap/core';
import { thankYouState } from './thankYou.state';
import { thankYouComponent } from './thankYou.component';

angular.module(app.name)
  .config(thankYouState)
  .component(thankYouComponent.name, thankYouComponent);
