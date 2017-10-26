import { BaseController } from '../../common/base/controller';
import _ from 'lodash';

export class SavingsController extends BaseController {
  constructor(controllerService, appData) {
    'ngInject';
    super({ controllerService, appData });
  }

  get savings() {
    return this.appData.savings;
  }

  get total() {
    return _.keys(this.savings).length;
  }
  
  get amount() {
    return _.keys(this.savingPositions).length;
  }

  $onInit() {
    if (!this.savings) {
      this.$state.go('app.login')
    }

    this.savingPositions = _.pickBy(this.savings, (val, key) => val.saving > -1);
    this.summedSavings = _.sumBy(_.values(this.savingPositions), s => {
      return +s.saving;
    });
  }

  select(type) {
    this.$state.go('app.home', { type } );
  }
}
