import _ from 'lodash';
import { BaseController } from '../../base/controller';

export class TabsController extends BaseController {
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  $onInit() {
    if (this.tabs && this.tabs.length) {
      this.select(this.tabs[0]);
    }
  }

  select(tab, $event) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    this.selectedTab = tab;
    this.onSelect({ tab });
  }
}
