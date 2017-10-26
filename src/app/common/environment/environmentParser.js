/* globals ENV_CONFIG:false */

import _ from 'lodash';

/**
 *  Returns the current environment which defines the tenant,
 *  the customization, and the stage. All these values are defined
 *  by the location hostname and therefore needs to be parsed.
 *
 *  The location hostname can be:
 *  [tenant-name][-stage].host.tld
 */
export function parseEnvironment(host, pattern, defaults, stages) {
  // Truthy or 'auto' host value let us take the current location hostname
  if (host === true || host === 'auto') {
    host = window.location.hostname; // eslint-disable-line angular/window-service
  }

  // Ensure host is given
  if (!host || !angular.isString(host)) {
    throw new Error('Given host value is not valid! It has to be type of string but given: ' + typeof host);
  }

  // All available tenants are defined the global env config
  const { tenants } = ENV_CONFIG;

  // Setup the environment with default values
  const environment = _.defaults({}, defaults);

  const values = host.match(pattern);
  const subhost = values[0];

  let tenant = subhost.replace(/-?optimusprime/, '');

  // If there is a tenant definition available, we check if this definition
  // contains hyphens ("-"). Since a tenant definition is allowed to contain hyphens
  // as well as the staging level can extend the tenant, separated by a hyphen.
  if (tenant) {
    if (tenant.indexOf('-') > -1) {
      tenant = tenant.split('-');

      // Get the last segment of the tenant (which can be the stage level)
      let tenantSuffix = tenant[tenant.length - 1];

      // If the last segment defines the stage level, we'll separate this value
      // from the tenant.
      if (stages && stages.indexOf(tenantSuffix) > -1) {
        // Pop the last value of the tenant as the stage level
        environment.stage = tenant.pop();
      }

      // Re-join the other parts as the tenants full name
      tenant = tenant.join('-');
    }

    // Map the parsed tenant to the environment
    environment.tenant = tenant;
  }

  return environment;
}
