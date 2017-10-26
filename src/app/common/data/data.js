import { app } from '../../bootstrap/core';
import {
  LoginService,
  AdminService,
  EnergyService
} from './dataSource';
import { DataParser } from './dataParser';
import { FileResponse } from './response/fileResponse';
import { splitFilter, splitNestedByNewlineFilter, formatIban } from './data.filter';
import { AppDataService } from './appData.service';

app.service('fileResponseService', FileResponse);

// TODO for the sake of consistency rename these service to lowerCase
app.service('loginService', LoginService);
app.service('adminService', AdminService);
app.service('energyService', EnergyService);
app.service('dataParser', DataParser);
app.service('appData', AppDataService);
app.filter('split', splitFilter);
app.filter('splitByNewline', splitNestedByNewlineFilter);
app.filter('iban', formatIban);
