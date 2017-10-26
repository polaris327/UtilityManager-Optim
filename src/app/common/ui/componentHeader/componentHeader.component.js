import template from './componentHeader.html';

const componentHeader = {
  restrict: 'E',
  bindings: {
    title: '<',
    body: '<'
  },
  template
};

export default componentHeader;
