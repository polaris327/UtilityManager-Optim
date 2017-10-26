import { app } from '../../bootstrap/core';
import { CustomizationService } from './customization.service';
import { customIf, customUnless } from './customization.directive';

app.service('customizationService', CustomizationService);
app.directive('customIf', customIf);
app.directive('customUnless', customUnless);

app.run((customizationService) => {
  'ngInject';
  // Load environment specific customizations
  customizationService.loadCustomizations();
});
