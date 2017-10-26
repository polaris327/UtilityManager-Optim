import { HomeController } from './home.controller';
import template from './home.html';
import '../../common/ui/hero/hero';
import '../../common/ui/configurator/configurator';
import '../../common/ui/contractCard/contractCard';
import '../../common/ui/contractSummary/contractSummary';
import '../../common/ui/supportFooter/supportFooter';
import '../../common/ui/sortTab/sortTab';
import '../../common/ui/tabTable/tabTable';

export const homeComponent = {
  name: 'homeComponent',
  restrict: 'E',
  template,
  controller: HomeController,
  controllerAs: 'vm',
  bindings: {}
};
