import { BaseController } from '../../common/base/controller';

export class ThankYouController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }
  
  $onInit() {
    this.$log.log(this)
  }
}
