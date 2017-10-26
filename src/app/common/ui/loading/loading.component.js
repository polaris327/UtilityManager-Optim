import { LoadingController } from './loading.controller';
import template from './loading.html';

export const loadingComponent = {
  name: 'loading',
  restrict: 'E',
  template,
  controller: LoadingController,
  controllerAs: 'vm',
  bindings: {
    hideCaption: '<',
    fullscreen: '<'
  }
};
