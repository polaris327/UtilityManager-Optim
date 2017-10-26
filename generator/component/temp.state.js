import { <%= name %>Component } from './<%= name %>.component';

export const <%= name %>StateName = 'app.<%= name %>';

export const <%= name %>State = ($stateProvider) => {
  'ngInject';

  $stateProvider.state({
    name: <%= name %>StateName,
    url: '/<%= name %>',
    component: <%= name %>Component.name,
    data: { requiresAuth: true }
  });
};
