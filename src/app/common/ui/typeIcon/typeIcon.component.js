import { TypeIconController } from './typeIcon.controller';
import template from './typeIcon.html';

export const typeIconComponent = {
  name: 'typeIcon',
  restrict: 'E',
  template,
  controller: TypeIconController,
  controllerAs: 'vm',
  bindings: {
    type: '<'
  }
};
