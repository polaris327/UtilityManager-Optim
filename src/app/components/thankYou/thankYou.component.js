import { ThankYouController } from './thankYou.controller';
import template from './thankYou.html';
// // import './thankYou.scss';

export const thankYouComponent = {
  name: 'thankYouComponent',
  restrict: 'E',
  template,
  controller: ThankYouController,
  controllerAs: 'vm',
  bindings: {}
};
