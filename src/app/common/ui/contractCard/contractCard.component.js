import { ContractCardController } from './contractCard.controller';
import template from './contractCard.html';
import './sections/costs.tpl.html';
import './sections/details.tpl.html';
import './sections/rating.tpl.html';
import './sections/resources.tpl.html';

/**
 * contract: {
 *  name.
 *  tarif,
 *  rating,
 *  ratingCount
 * }
 * 
 * details: []
 * 
 * price: {
 *  price,
 *  saving
 * }
 */

export const contractCardComponent = {
  name: 'contractCard',
  restrict: 'E',
  template,
  transclude: true,
  controller: ContractCardController,
  controllerAs: 'vm',
  bindings: {
    offer: '<',
    contract: '<',
    details: '<',
    price: '<',
    sections: '<'
  }
};
