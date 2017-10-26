import { app } from '../../bootstrap/core';
import { <%= name %>State } from './<%= name %>.state';
import { <%= name %>Component } from './<%= name %>.component';

angular.module(app.name)
  .config(<%= name %>State);
  .component(<%= name %>Component.name, <%= name %>Component);
