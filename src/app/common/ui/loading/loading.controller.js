import { BaseController } from '../../base/controller';

export class LoadingController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    this.name = 'loading';
    this.$log.log('onInit', this.name)
  }
}
