import _ from 'lodash';
import { BaseController } from '../../base/controller';

export class FilterController extends BaseController {
  constructor($scope, controllerService, filterService) {
    'ngInject';
    super({ $scope, controllerService, filterService });
  }

  get filterExtendedButtonText() {
    let appendix = 'collapsed';
    if (this.extended) {
      appendix = 'extended';
    }
    return `filter.${appendix}`;
  }

  $onChanges() {
    this.filter = this.filterService.getFilter();
  }

  submit($event) {
    this.onSubmit({ model: this.filterModel });
  }
}
