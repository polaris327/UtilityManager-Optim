import { BaseController } from '../../base/controller';

export class AppFooterController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    this.name = 'appFooter';
    this.$log.log('onInit', this.name)
  }
}
