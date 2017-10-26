import { BaseController } from '../../base/controller';

export class CdLayoutController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    this.name = 'cdLayout';
    this.$log.log('onInit', this.name)
  }
}
