import { app } from '../../bootstrap/core';
import { landingPageState } from './landingPage.state';
import { landingPageComponent } from './landingPage.component';

angular.module(app.name)
  .config(landingPageState)
  .component(landingPageComponent.name, landingPageComponent);
