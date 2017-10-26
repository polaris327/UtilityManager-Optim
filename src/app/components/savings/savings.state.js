import { savingsComponent } from './savings.component';

export const savingsStateName = 'app.savings';

export const savingsState = ($stateProvider) => {
  'ngInject';

  $stateProvider.state({
    name: savingsStateName,
    url: '/savings',
    component: savingsComponent.name,
    data: { requiresAuth: true }
  });
};
