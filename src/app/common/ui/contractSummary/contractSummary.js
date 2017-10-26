import { app } from '../../../bootstrap/core';
import { contractSummaryComponent } from './contractSummary.component';

angular.module(app.name)
  .component(contractSummaryComponent.name, contractSummaryComponent);
