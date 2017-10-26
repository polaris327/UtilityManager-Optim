export function customIf(envService) {
  'ngInject';

  return {
    link: link,
    priority: 1100,
    restrict: 'A',
    terminal: true,
    transclude: 'element',
    multiElement: true,
    $$tlb: true // eslint-disable-line angular/no-private-call
  };

  function link($scope, $element, $attr, ctrl, $transclude) {
    let cloneElement = null;
    let cloneScope = null;

    // When the model changes, adjust the element existence.
    $scope.$watch($attr.customIf, (customIf) => {
      // If we have an existing item, remove it.
      if (cloneElement) {
        cloneScope.$destroy();
        cloneScope = null;
        cloneElement.remove();
        cloneElement = null;
      }

      // If the new value is truthy, inject the element.
      if (envService.isTenant(customIf, true)) {
        cloneScope = $scope.$new();
        cloneElement = $transclude(
          cloneScope,
          (clone) => $element.after(clone)
        );
      }
    });
  }
}

export function customUnless(envService) {
  'ngInject';

  return {
    link: link,
    priority: 1100,
    restrict: 'A',
    terminal: true,
    transclude: 'element',
    multiElement: true,
    $$tlb: true // eslint-disable-line angular/no-private-call
  };

  function link($scope, $element, $attr, ctrl, $transclude) {
    let cloneElement = null;
    let cloneScope = null;

    // When the model changes, adjust the element existence.
    $scope.$watch($attr.customUnless, (customUnless) => {
      // If we have an existing item, remove it.
      if (cloneElement) {
        cloneScope.$destroy();
        cloneScope = null;
        cloneElement.remove();
        cloneElement = null;
      }

      // If the new value is truthy, inject the element.
      if (!envService.isTenant(customUnless, true)) {
        cloneScope = $scope.$new();
        cloneElement = $transclude(
          cloneScope,
          (clone) => $element.after(clone)
        );
      }
    });
  }
}
