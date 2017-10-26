import { BaseController } from '../../base/controller';
import { Process } from './costs.constants'; 

export class CostsController extends BaseController {
  get process() {
    return Process;
  }

  constructor(controllerService) {
    'ngInject';
    super({ controllerService });

    this.currentStep = -1;
    this.show = true;
  }

  $onInit() {
    this.nextStep(true);
  }

  nextStep(first) {
    if (this.form.$invalid) {
      return;
    }

    this.currentStep++;
    if (this.process.length === this.currentStep) {
      return this.onFinish();
    }

    if (!first) {
      this.show = false;
    }

    const step = this.process[this.currentStep];
    if (step.value) {
      this.model[step.key] = step.value(this.model);
    }
    this.translateValues = angular.copy(this.model);
    this.step = step;

    this.$timeout(() => this.show = true, this.animationDuration);
  }
}
