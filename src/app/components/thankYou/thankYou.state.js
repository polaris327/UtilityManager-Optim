import { thankYouComponent } from './thankYou.component';

export const thankYouStateName = 'app.thankYou';

export const thankYouState = ($stateProvider) => {
  'ngInject';

  $stateProvider.state({
    name: thankYouStateName,
    url: '/thankYou',
    component: thankYouComponent.name,
    data: { requiresAuth: true }
  });
};
