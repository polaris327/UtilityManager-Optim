import { SavingCardController } from './savingCard.controller';
import template from './savingCard.html';

export const savingCardComponent = {
  name: 'savingCard',
  restrict: 'E',
  template,
  controller: SavingCardController,
  controllerAs: 'vm',
  bindings: {
    saving: '<',
    type: '<',
    action: '&'
  }
};
