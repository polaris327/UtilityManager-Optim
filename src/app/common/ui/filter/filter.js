import { app } from '../../../bootstrap/core';
import { filterComponent } from './filter.component';
import { FilterOptions } from './filter.constants';
import { FilterService } from './filter.service';

import './partials/buttons.tpl.html';
import './partials/slider.tpl.html';
import './partials/switch.tpl.html';

angular.module(app.name)
  .constant('FilterOptions', FilterOptions)
  .service('filterService', FilterService)
  .component(filterComponent.name, filterComponent);
