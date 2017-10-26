import { BaseController } from '../../common/base/controller';

export class <%= upperCaseName %>Controller extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }
  
  $onInit() {
    this.$log.log(this)
  }
}
