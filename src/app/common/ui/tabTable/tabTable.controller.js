import { BaseController } from '../../base/controller';

export class TabTableController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    console.log(this);
  }
}
