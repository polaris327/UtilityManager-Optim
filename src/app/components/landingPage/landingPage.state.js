import { landingPageComponent } from './landingPage.component';

export const landingPageStateName = 'app.landingPage';

export const landingPageState = ($stateProvider) => {
  'ngInject';

  $stateProvider.state({
    name: landingPageStateName,
    url: '/landingPage',
    component: landingPageComponent.name,
    data: { requiresAuth: true }
  });
};
