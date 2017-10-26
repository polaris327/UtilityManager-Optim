import { SavingsController } from './savings.controller';
import template from './savings.html';

export const savingsComponent = {
  name: 'savingsComponent',
  restrict: 'E',
  template,
  controller: SavingsController,
  controllerAs: 'vm',
  bindings: {}
};
