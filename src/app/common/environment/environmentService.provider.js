import { InjectableClass } from '@fino/lib-injection';
import { parseEnvironment } from './environmentParser';
import { environmentPattern, environmentDefaults, environmentStages } from './environment.constants';

/**
 * This module serves as a helper to expose the current execution environment.
 */
export class EnvironmentServiceProvider extends InjectableClass {
  constructor($windowProvider, envConfig) {
    'ngInject';
    super({ $windowProvider, envConfig });
  }

  get build() {
    return this.envConfig.build;
  }

  get stages() {
    return this.envConfig.stages;
  }

  get win() {
    return this.$windowProvider.$get();
  }

  get location() {
    return this.win.location;
  }

  get host() {
    return this.location.hostname;
  }

  get protocol() {
    return this.location.protocol;
  }

  get port() {
    return this.location.port;
  }

  get apiHost() {
    return this.envConfig.apiHost;
  }

  // Returns the current environment containing the tenant
  // and the stage which are defined inside the location
  // hostname and have to be parsed out.
  getEnvironment() {
    // Environment needs only the be parsed once!
    if (!this.environment) {
      this.environment = parseEnvironment(
        this.host,
        environmentPattern,
        environmentDefaults,
        environmentStages
      );
    }
    return this.environment;
  }

  getCustom() {
    return this.getEnvironment().custom;
  }

  getTenant() {
    return this.getEnvironment().tenant;
  }

  getStage() {
    return this.getEnvironment().stage;
  }

  isCustom(custom) {
    return this.getCustom() === custom;
  }

  isTenant(tenant, checkMultiple = false) {
    // Allow checking for multiple tenants (when given tenant is an array of tenants)
    const currentTenant = this.getTenant();
    if (checkMultiple && angular.isArray(tenant)) {
      return tenant.indexOf(currentTenant) > -1;
    }
    return currentTenant === tenant;
  }

  isEnvironment(env) {
    const stage = this.getStage();
    return stage && this.getStage().indexOf(env) !== -1;
  }

  isProduction() {
    // Not the best solution but in case of an host/environment switch
    // we can not ensure that the production environment detection
    // will work as long as it depends on parts of the host.
    return !(this.isTesting() || this.isDevelopment() || this.isLocalhost());
  }

  isTesting() {
    return this.isEnvironment(this.stages.testing);
  }

  isDevelopment() {
    return this.isEnvironment(this.stages.dev);
  }

  isLocalhost() {
    return this.host.indexOf('localhost') !== -1;
  }

  isFilehost() {
    return !this.host || this.protocol === 'file';
  }

  $get() {
    'ngInject';

    const {
      environmentPattern,
      environmentDefaults,
      win,
      location,
      host,
      protocol,
      port,
      apiHost,
      build,
      stages,
      custom,
      getEnvironment,
      getCustom,
      getTenant,
      getStage,
      isCustom,
      isTenant,
      isEnvironment,
      isProduction,
      isTesting,
      isDevelopment,
      isLocalhost,
      isFilehost
    } = this;

    return {
      environmentPattern,
      environmentDefaults,
      win,
      location,
      host,
      protocol,
      port,
      apiHost,
      build,
      stages,
      custom,
      getEnvironment,
      getCustom,
      getTenant,
      getStage,
      isCustom,
      isTenant,
      isEnvironment,
      isProduction,
      isTesting,
      isDevelopment,
      isLocalhost,
      isFilehost
    };
  }
}
