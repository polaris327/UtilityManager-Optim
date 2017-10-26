import { userComponent } from './user.component';

export const userStateName = 'app.user';

export const userState = ($stateProvider) => {
  'ngInject';

  $stateProvider.state({
    name: userStateName,
    url: '/user',
    component: userComponent.name,
    data: { requiresAuth: true }
  });
};
