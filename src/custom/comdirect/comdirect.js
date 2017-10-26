import { app } from '../../app/bootstrap/core';
import { navbarBrandLogo } from './comdirect.values';
import './comdirect.scss';
console.log('comdirect')

// Modify component values
app.value('navbarBrandLogo', navbarBrandLogo);

angular.bootstrap(document, [app.name]);
