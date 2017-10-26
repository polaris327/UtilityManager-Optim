import { homeComponent } from './home.component';

export const homeStateName = 'app.home';

export const homeState = ($stateProvider) => {
  'ngInject';

  $stateProvider.state({
    url: '/:type?story',
    name: homeStateName,
    component: homeComponent.name,
    data: { requiresAuth: true }
  });
}
