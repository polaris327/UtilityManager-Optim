import { appComponent } from './app.component';
import _ from 'lodash';

export const appState = ($stateProvider) => {
  'ngInject';

  // Converts component name to kebab case.
  const componentName = _.kebabCase(appComponent.name);

  $stateProvider.state({
    abstract: true,
    name: 'app',
    redirectTo: 'home',
    template: `<${componentName}></${componentName}>`,
    resolve: {
      languageOptions: ($translate, $locale, controllerService) => {
        'ngInject';
        const lang = $translate.use();
        return controllerService.tmhDynamicLocale.set(lang).then(() => {
          const { longDate, mediumDate, shortDate } = $locale.DATETIME_FORMATS;
          return {
            lang,
            dateFormat: longDate,
            longDate,
            mediumDate,
            shortDate
          };
        });
      }
    }
  });
}
