import { AvailabilityController } from './availability.controller';
import template from './availability.html';

export const availabilityComponent = {
  name: 'availability',
  restrict: 'E',
  template,
  controller: AvailabilityController,
  controllerAs: 'vm',
  bindings: {
    form: '=?',
    streetSelected: '&',
    required: '<',
    model: '=?'
  }
};
