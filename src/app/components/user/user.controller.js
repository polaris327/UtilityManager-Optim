import { BaseController } from '../../common/base/controller';
import { CompareMode } from '../home/home.constants';

export class UserController extends BaseController {
  constructor(controllerService, energyService, appData) {
    'ngInject';
    super({ controllerService, energyService, appData });
  }

  $onInit() {
    const userModel = this.appData.user;
    if (!userModel) {
      return this.go('app.landingPage');
    }

    this.userModel = userModel;
  }

  searchCheaperRates() {
    const { userModel, energyService } = this;
    const { area, usage } = userModel;
    const { code, locationID, postCode } = area;
    const data = {
      postCode,
      locationID,
      phonePrefix: code,
      annualTotalElec: usage[CompareMode.Electricity],
      annualTotalGas: usage[CompareMode.Gas],
      annualTotalDsl: usage[CompareMode.Dsl],
      amountElec: parseFloat(userModel[CompareMode.Electricity]),
      amountGas: parseFloat(userModel[CompareMode.Gas]),
      amountDsl: parseFloat(userModel[CompareMode.Dsl])
    };

    this.userBusy = true;
    this.appData.clear();
    energyService
      .cheapestRates(data)
      .then(savings => {
        this.appData.savings = savings;
        this.appData.configuration = {
          allUsages: usage,
          area
        };
        this.$state.go('app.savings');
      })
      .finally(() => this.userBusy = false);
  }

  userEnteredCosts() {
    this.userCostsFinished = true;
    this.$timeout(() => this.showConfigurator = true, this.animationDuration);
  }
}
