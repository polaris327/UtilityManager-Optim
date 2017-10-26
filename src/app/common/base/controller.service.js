import { InjectableClass } from '@fino/lib-injection';

export class ControllerService extends InjectableClass {
  constructor(
    $log,
    $translate,
    $locale,
    tmhDynamicLocale,
    $state,
    $stateParams,
    $window,
    $timeout,
    envService,
    envConfig,
    errorService,
    appCache,
  ) {
    'ngInject';
    super({
      $log,
      $translate,
      $locale,
      tmhDynamicLocale,
      $state,
      $stateParams,
      $window,
      $timeout,
      envService,
      envConfig,
      errorService,
      appCache,
    });
  }
}
