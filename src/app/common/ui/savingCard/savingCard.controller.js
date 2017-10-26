import { BaseController } from '../../base/controller';

export class SavingCardController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    this.name = 'savingCard';
    this.$log.log('onInit', this.name)
  }
}
