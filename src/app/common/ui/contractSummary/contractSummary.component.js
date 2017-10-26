import { ContractSummaryController } from './contractSummary.controller';
import template from './contractSummary.html';

/**
 * user: {
 *  usage,
 *  location
 * }
 * 
 * contract: {
 *  supplier,
 *  tarif
 * }
 */

export const contractSummaryComponent = {
  name: 'contractSummary',
  restrict: 'E',
  template,
  controller: ContractSummaryController,
  controllerAs: 'vm',
  bindings: {
    type: '<',
    user: '<',
    contract: '<',
    tariffChange: '&'
  }
};
