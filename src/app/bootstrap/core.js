import * as angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import 'ui-router-extras';
import uiSelect from 'ui-select';
import 'angular-filter';
import 'angular-storage';
import ngCache from 'angular-cache';
import uibCollapse from 'angular-ui-bootstrap/src/collapse';
import uibModal from 'angular-ui-bootstrap/src/modal';
import uibDropdown from 'angular-ui-bootstrap/src/dropdown';
import uibTypeahead from 'angular-ui-bootstrap/src/typeahead';
import uibButtons from 'angular-ui-bootstrap/src/buttons';
import uibPagination from 'angular-ui-bootstrap/src/pagination';
import uibAccordion from 'angular-ui-bootstrap/src/accordion';
import dynamicLocale from 'angular-dynamic-locale';
import translate from  'angular-translate';
import translatePartialLoader from 'angular-translate-loader-partial';
import 'angular-translate-interpolation-messageformat';
import toastr from 'angular-toastr';
import 'angular-rating';
import 'angular-chart.js';
import 'ng-device-detector';

import '@fino/lib-injection';
import uiFormButton from '@fino/ui-form-button';
import uiFormControl from '@fino/ng1-form-control';
import uiFormValidation from '@fino/ui-form-validation';
import uiErrorHandling from '@fino/ui-error-handling';
import uiFloatLabel from '@fino/ui-float-label';
import uiInputLabel from '@fino/ui-input-label';
import uiModal from '@fino/ui-modal';
import ng1FigoLogin from '@fino/ng1-figo-login';
import uiLoadingIndicator from '@fino/ng1-loading-indicator';


// Create the main angular module called "app".
// It's empty now, but other parts of the app will register things on it.
// Since it is exported, other parts of the application (in other files) can then import it and register things.
export const app = angular.module('app', [
  ngAnimate,
  uiRouter,
  'ct.ui.router.extras.core',
  'angular.filter',
  'angular-storage',
  'angular-rating',
  'chart.js',
  'ng.deviceDetector',
  ngCache,
  uiSelect,
  uibButtons,
  uibCollapse,
  uibModal,
  uiModal,
  uibDropdown,
  uibTypeahead,
  uibPagination,
  uibAccordion,
  translate,
  translatePartialLoader,
  dynamicLocale,
  uiErrorHandling,
  uiFormButton,
  uiFormControl,
  uiFormValidation,
  uiFloatLabel,
  ng1FigoLogin,
  uiInputLabel,
  uiLoadingIndicator,
  toastr
]);
