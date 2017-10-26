import { app } from '../../app/bootstrap/core';
import { navbarBrandLogo } from './<%= name %>.values';
import './<%= name %>.scss';

// Modify component values
app.value('navbarBrandLogo', navbarBrandLogo);

angular.bootstrap(document, [app.name]);
