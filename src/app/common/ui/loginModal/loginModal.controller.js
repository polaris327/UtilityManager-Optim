import { BaseController } from '../../base/controller';
import LoginModal from './loginModal.tpl.html';

export class LoginModalController extends BaseController {
  constructor($scope, controllerService, loginService, uiModalDeclarationService) {
    'ngInject';
    super({ $scope, controllerService, loginService, uiModalDeclarationService });
  }

  $onInit() {
    this.$scope.agbCheck=false
    this.$scope.$watch('agbCheck', (val) => {
      console.log('agbcheck', val)
    });

    this.$scope.$watch('vm.open', () => {
      if (this.open) {
        this.openLoginModal();
      }
    });
  }

  searchBanks(search) {
    return this.loginService.searchBanks(search);
  }

  login(bank, credentials) {
    return this.loginService
      .login(bank, credentials)
      .then(() => this.onLogin());
  }

  openLoginModal() {
    this.uiModalDeclarationService.openUrl({
      url: LoginModal,
      options: {
        modalClass: 'login-modal',
        scope: this.$scope
      }
    })
    .finally(() => {
      this.open = false;
    });
  }
}
