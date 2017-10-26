import { InjectableClass } from '@fino/lib-injection';
import { setCustomScriptUrl } from './customizationFiles';

export class CustomizationService extends InjectableClass {
  constructor(envConfig, envService, $rootScope, $log) {
    'ngInject';
    super({ envConfig, envService, $rootScope, $log });

    // Get the environment
    this.environment = envService.getEnvironment();
  }

  loadCustomizations() {
    const { $rootScope, $log, environment } = this;

    // setCustomStyleUrl(environment);
    setCustomScriptUrl(environment);

    // Make config globally available
    $rootScope.environment = environment;

    // Print environment to console (TODO dev/testing only)
    $log.debug(angular.toJson(environment, true));
  }

}
