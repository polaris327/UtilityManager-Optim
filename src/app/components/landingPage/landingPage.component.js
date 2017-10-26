import { LandingPageController } from './landingPage.controller';
import template from './landingPage.html';

export const landingPageComponent = {
  name: 'landingPageComponent',
  restrict: 'E',
  template,
  controller: LandingPageController,
  controllerAs: 'vm',
  bindings: {}
};
