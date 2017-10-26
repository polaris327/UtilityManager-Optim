import { app } from './bootstrap/core';
import { appState } from './app.state';
import { appComponent } from './app.component';
import { appLoading } from './app.directive';
import './common/ui/appHeader/appHeader';
import './common/ui/appFooter/appFooter';
import './common/ui/tabs/tabs';
import './common/ui/filter/filter';
import './common/ui/availability/availability';
import './common/ui/costs/costs';
import './common/ui/typeIcon/typeIcon';
import './common/ui/savingCard/savingCard';
import './common/ui/loginModal/loginModal';

app.config(appState);
app.component('app', appComponent);
app.directive('appLoading', appLoading);

// Apply some global configuration...

// Create application wide cache with the following set of methods:
//  {object} info() — Returns id, size, and options of cache.
//  {{*}} put({string} key, {*} value) — Puts a new key-value pair into the cache and returns it.
//  {{*}} get({string} key) — Returns cached value for key or undefined for cache miss.
//  {void} remove({string} key) — Removes a key-value pair from the cache.
//  {void} removeAll() — Removes all cached values.
//  {void} destroy() — Removes references to this cache from $cacheFactory.
app.factory('appCache', (cacheFactory) => {
  'ngInject';
  return cacheFactory.create('appCache');
});

// If the user enters a URL that doesn't match any known URL (state),
// send them to `/` by default.
app.config(($locationProvider, $urlRouterProvider, $httpProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  let isApiRequest = (config) => _.startsWith(config.url, '/api');

  // Error handling
  $httpProvider.interceptors.push('errorInterceptor');

  // Handle Angular IE Caching issue for $http
  // Initialize get if not there
  if (!$httpProvider.defaults.headers.get) {
    $httpProvider.defaults.headers.get = {};
  }

  // Disable IE ajax request caching
  $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
  $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
  $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
});

// Enable tracing of each TRANSITION... (check the javascript console)

// This syntax `$trace.enable(1)` is an alternative to `$trace.enable("TRANSITION")`.
// Besides "TRANSITION", you can also enable tracing for : "RESOLVE", "HOOK", "INVOKE", "UIVIEW", "VIEWCONFIG"
app.run(($trace, $log, envService) => {
  'ngInject';
  // $trace.enable(1);

  // Print out the current build number of the application
  $log.info(envService.build);
});
