import { BaseController } from '../../common/base/controller';

export class LandingPageController extends BaseController {
  get pathItems() {
    return ['compare', 'switch', 'save'];
  }
  
  constructor(controllerService) {
    'ngInject';
    super({ controllerService });
  }

  onLogin() {
    this.go('app.user');
  }
}
