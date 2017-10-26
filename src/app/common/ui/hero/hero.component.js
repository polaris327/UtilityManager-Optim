import template from './hero.html';

export default {
  restrict: 'E',
  bindings: {
    title: '@',
    lead: '@'
  },
  template
};
