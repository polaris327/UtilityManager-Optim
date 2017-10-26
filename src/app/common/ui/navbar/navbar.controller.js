import { BaseController } from '../../../common/base/controller';

class NavbarController extends BaseController {
  constructor(controllerService, navbarService) {
    'ngInject';
    super({ controllerService, navbarService });
  }

  $onInit() {
    const { navbarService } = this;
    this.navbarTabs = navbarService.getTabs();
  }

  isActive(tab) {
    return this.$stateParams.type && this.$stateParams.type === tab;
  }
}

export default NavbarController;
