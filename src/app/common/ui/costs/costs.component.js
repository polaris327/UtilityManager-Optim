import { CostsController } from './costs.controller';
import template from './costs.html';

export const costsComponent = {
  name: 'costs',
  restrict: 'E',
  template,
  controller: CostsController,
  controllerAs: 'vm',
  bindings: {
    form: '=',
    model: '=',
    onFinish: '&'
  }
};
