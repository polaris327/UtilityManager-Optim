import { app } from '../../bootstrap/core';
import _ from 'lodash';

app.config(function ($provide) {
  $provide.decorator('$q', function($delegate) {
  // Extend promises
    let defer = $delegate.defer,
      when = $delegate.when,
      reject = $delegate.reject,
      all = $delegate.all;
    $delegate.defer = function() {
      var deferred = defer();
      decorate(deferred.promise);
      return deferred;
    };
    $delegate.when = function() {
      var p = when.apply(this, arguments);
      return decorate(p);
    };
    $delegate.reject = function() {
      var p = reject.apply(this, arguments);
      return decorate(p);
    };
    $delegate.all = function() {
      var p = all.apply(this, arguments);
      return decorate(p);
    };

    return $delegate;
  });
});

app.config(function ($provide) {
  $provide.decorator('$http', function($delegate) {
    const $http = $delegate;
    const decoratedHttp = function() {
      let http = $http.apply($http, arguments);
      return decorate(http);
    };

      // $http has convenience methods such as $http.get() that we have
    // to pass through as well.
    Object.keys($http).filter(function (key) {
      return (angular.isFunction($http[key]));
    }).forEach(function (key) {
      decoratedHttp[key] = function () {

        // Apply global changes to arguments, or perform other
        // nefarious acts.

        let http = $http[key].apply($http, arguments);
        return decorate(http);
      };
    });

    return decoratedHttp;
  });
});

const decorate = (promise) => {
  if (promise && promise.then) {
    return decorateBusy(promise);
  }
  return promise;
};

const decorateBusy = (promise) => {
  promise.busy = (instance, property) => {
    _.set(instance, property, true);
    promise.finally(() => {
      _.set(instance, property, false);
    });
    return promise;
  };
  const { then } = promise;
  promise.then = (s,e,p) => {
    let thenPromise = then.apply(promise, [s,e,p]);
    return decorate(thenPromise);
  };
  return promise;
};
