import { BaseController } from '../../../common/base/controller';
export class AppHeaderController extends BaseController {

  constructor( $rootScope, controllerService, $window) {
    'ngInject';
    super({ $rootScope, controllerService });
  }

  $onInit() {
  }

  toggleSidebar() {
    const { $rootScope } = this;
    $rootScope.$broadcast('toggleSideBar');
    // const { $window } = this;
    // if ($window.innerWidth > 360)
    //   angular.element(document.querySelector(".mobile-sidebar")).css({'width': '360px', 'left': '0'});
    // else
    //   angular.element(document.querySelector(".mobile-sidebar")).css({'width': '300px', 'left': '0'});
  }
}
