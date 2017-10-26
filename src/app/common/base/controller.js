/* global _:false */

export class BaseController {
  constructor(injections, options) {
    // Assign given injections to the controllers instance
    this.constructor.injectArguments(this, injections, options);

    // Ensure that the mandatory controllerSevice has been injected
    this.constructor.contractInjection(this, 'controllerService');

    // Set initial languageOptions once
    if (!this.languageOptions) {
      this.setLanguageOptions();
    }
  }

  get $log() {
    return this.controllerService.$log;
  }

  get $locale() {
    return this.controllerService.$locale;
  }

  get $translate() {
    return this.controllerService.$translate;
  }

  get $state() {
    return this.controllerService.$state;
  }

  get $stateParams() {
    return this.controllerService.$stateParams;
  }

  get $window() {
    return this.controllerService.$window;
  }

  get $timeout() {
    return this.controllerService.$timeout;
  }

  get envService() {
    return this.controllerService.envService;
  }

  get appCache() {
    return this.controllerService.appCache;
  }

  get errorService() {
    return this.controllerService.errorService;
  }

  get animationDuration() {
    return 500;
  }

  error(error) {
    this.constructor.contractInjection(this, 'errorService');

    this.errorService.error(error);
  }

  go(to, params = {}, options = {}) {
    this.constructor.contractInjection(this, '$state');

    // Ensure that the given parameters are splitted
    // to the target state and its parameters. If the
    // given to parameter contains a state object, we
    // have to deconstruct this object first.
    if (to.state) {
      params = _.merge(to.params || {}, params);
      to = to.state.name;
    }

    if (options.silent) {
      return this.$state.go(to, params, { location: 'replace' });
    }
    return this.$state.go(to, params);
  }

  goBack() {
    this.constructor.contractInjection(this, '$window');
    this.$window.history.back();

    // Support native app history
    if (navigator && navigator.app) {
      navigator.app.backHistory();
    }
  }

  reload(params) {
    this.go(this.$state.current, params);
  }

  bindTranslationChange(rootScope) {
    rootScope.$on('$translatePartialLoaderStructureChanged', () => {
      this.setLanguageOptions();
    });
  }

  setLanguageOptions() {
    const lang = this.$translate.use();
    return this.controllerService.tmhDynamicLocale.set(lang).then(() => {
      const { longDate, mediumDate, shortDate } = this.$locale.DATETIME_FORMATS;
      this.languageOptions = {
        lang,
        dateFormat: mediumDate,
        longDate,
        mediumDate,
        shortDate
      };
      return this.languageOptions;
    });
  }
}
