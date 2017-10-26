import { app } from '../bootstrap/core';
import { ControllerService } from './base/controller.service';
import './ui/icon/icon';
import './ui/loading/loading';

app.service('controllerService', ControllerService);
