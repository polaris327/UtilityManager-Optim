import { app } from '../../app/bootstrap/core';
import './fino.scss';

// Create and overwrite application-wide configuration
// NOTE: This is different from a decorator in that we are completely replacing
// the appConfig and do not have access to the previously-defined versions.
app.factory('appConfig', () => {
  'ngInject';
  return configFactory.create(customConfig);
});

angular.bootstrap(document, [app.name]);
