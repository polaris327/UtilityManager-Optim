import { BaseController } from '../../base/controller';

export class <%= upperCaseName %>Controller extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    this.name = '<%= name %>';
    this.$log.log('onInit', this.name)
  }
}
