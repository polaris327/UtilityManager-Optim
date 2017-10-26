import _ from 'lodash';
import { BaseController } from '../../base/controller';
import { ConfiguratorItems, NeedsLocation, NeedsAreaCode } from './configurator.constants';

export class ConfiguratorController extends BaseController {
  get hasLocationError() {
    return this.energyService.hasLocations && !this.model.area.locationID;
  }

  get locationSelected() {
    return this.model.area && this.model.area.locationID;
  }

  get configuratorItem() {
    return ConfiguratorItems;
  }

  get needsLocation() {
    return NeedsLocation(this.type);
  }
  
  get needsAreaCode() {
    return NeedsAreaCode(this.type);
  }

  get postCode() {
    if (!this.model.area.fullName) {
      return this.model.area.postCode;
    }

    return `${this.model.area.postCode} - ${this.model.area.fullName}`;
  }

  set postCode(value) {
    this.setPostCode(value);
  }

  constructor(controllerService, energyService) {
    'ngInject';
    super({ controllerService, energyService });
  }

  resetPostCode() {
    this.setPostCode(this.model.area.postCode);
  }

  setPostCode(postCode) {
    this.validateLocation(true);
    this.model.area = _.merge(this.model.area || {}, {
      postCode
    });
  }

  $onInit() {
    if (!this.model) {
      this.model = {};
    }

    this.locationsSuggest = {
      templateUrl: 'app/common/ui/configurator/partials/locations.tpl.html',
      editable: true,
      delay: 300
    };

    if (!this.model.area) {
      this.setPostCode('');
    }
  }

  getIcon(item) {
    return item.icons[this.type] || item.icons.default;
  }

  getValue(item) {
    return item.values[this.type] || item.values;
  }

  select(item) {
    _.forEach(this.configuratorItem, i => {
      if (i === item) {
        return;
      }

      i.selected = false
    });
    item.selected = !item.selected;
    if (item.selected) {
      this.model.usage = this.getValue(item);
    }
  }

  submit($event) {
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }

    this.form.$submitted = true;
    if (this.form.$invalid && !this.locationSelected) {
      console.log('invalid entry')
      return;
    }

    if (this.hasLocationError) {
      console.log('location error')
      this.validateLocation(false);
      return;
    }

    const { usage, area } = this.model;
    this.action({ usage, area });
  }

  requestLocations(viewValue) {
    return this.energyService.locationsFor(viewValue);
  }

  selectLocation(location) {
    this.valid = true;
    _.merge(this.model.area, location);
    this.validateLocation(true);
  }

  validateLocation(valid) {
    this.form && this.form.postCode && this.form.postCode.$setValidity('location', valid);
  }
}
