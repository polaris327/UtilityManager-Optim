import { BaseController } from '../../base/controller';

export class SortTabController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    if (this.values && this.values.length) {
      this.sort(this.values[0]);
    }
  }

  sort(value) {
    this.sortValue = value;
    this.onSort({value});
  }
}
