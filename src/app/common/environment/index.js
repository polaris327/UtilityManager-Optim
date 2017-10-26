import { app } from '../../bootstrap/core';
import { EnvironmentServiceProvider } from './environmentService.provider';

app.provider('envService', EnvironmentServiceProvider);
