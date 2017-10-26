import { app } from '../../../bootstrap/core';
import { <%= name %>Component } from './<%= name %>.component';

angular.module(app.name)
  .component(<%= name %>Component.name, <%= name %>Component);
