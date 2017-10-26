import { app } from '../../../bootstrap/core';
import { savingCardComponent } from './savingCard.component';

angular.module(app.name)
  .component(savingCardComponent.name, savingCardComponent);
