import _ from 'lodash';
import { CompareMode } from '../../components/home/home.constants';

export class AppDataService {
  get savings() {
    return this.appCache.get('savings');
  }
  
  set savings(value) {
    return this.appCache.put('savings', value);
  }

  get user() {
    return this.appCache.get('user');
  }
  
  set user(value) {
    return this.appCache.put('user', value);
  }

  get configuration() {
    return this.appCache.get('configuration');
  }

  set configuration(value) {
    return this.appCache.put('configuration', value);
  }

  constructor(appCache) {
    'ngInject';
    this.appCache = appCache;
  }

  specifyConfiguration(type) {
    const configuration = this.configuration;
    //configuration.usage = configuration.allUsages[type];
    this.configuration = configuration;
  }

  getOffers(type) {
    return this.appCache.get(`offers${type}`);
  }
  
  setOffers(type, value) {
    return this.appCache.put(`offers${type}`, value);
  }
  
  getContract(type) {
    return this.appCache.get(`contract${type}`);
  }
  
  setContract(type, value) {
    return this.appCache.put(`contract${type}`, value);
  }
  
  getFilter(type) {
    return this.appCache.get(`filter${type}`);
  }
  
  setFilter(type, value) {
    return this.appCache.put(`filter${type}`, value);
  }

  clear() {
    _.each(CompareMode, (val, key) => {
      this.appCache.remove(`contract${val}`);
      this.appCache.remove(`offers${val}`);
    });
  }
}