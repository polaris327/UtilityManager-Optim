import { app } from '../../bootstrap/core';
import 'angular-i18n/angular-locale_de';

app.config(function ($translateProvider, $translatePartialLoaderProvider, envConfig, tmhDynamicLocaleProvider) {
  'ngInject';

  // Escaping of variable content
  $translateProvider.useLoaderCache(true);
  $translateProvider.useSanitizeValueStrategy('escaped');

  // Instead of using the message format interpolation as the default interpolation,
  // we add the message format interpolation service as an 'optional' interpolation type.
  // Read more about this decision at `The drawback` on https://angular-translate.github.io/docs/#/guide/14_pluralization
  $translateProvider.addInterpolation('$translateMessageFormatInterpolation');

  // Use partial loader for translations loading
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '{part}/lang/{lang}.json'
  });

  // Add initial translate partial(s)
  $translatePartialLoaderProvider.addPart('app');

  // Set and use default language
  $translateProvider.preferredLanguage('de');
  $translateProvider.use('de');
  // Enable dynamic load of locale files
  tmhDynamicLocaleProvider.localeLocationPattern('angular-locale_{{locale}}.js');
});

app.run(function ($rootScope, $translate) {
  'ngInject';
  /*eslint-disable angular/on-watch, no-unused-vars*/
  $rootScope.$on('$translatePartialLoaderStructureChanged', () => {
    $translate.refresh();
  });
  /*eslint-enable angular/on-watch, no-unused-vars*/
});
