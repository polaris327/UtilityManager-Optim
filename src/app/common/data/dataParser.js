import { app } from '../../bootstrap/core';
import _ from 'lodash';

export class DataParser {
  constructor($filter, $sce) {
    'ngInject';

    this.$filter = $filter;
    this.$sce = $sce;
  }

  static get modifierTypes() {
    return {
      DATE: 'date',
      CURRENCY: 'cur',
      IBAN: 'iban',
      ARRAY: 'join'
    };
  }

  static get createFilter() {
    return ($filter, $sce) => {
      'ngInject';

      let dataParser = new DataParser($filter, $sce);
      return dataParser.filter.bind(dataParser);
    };
  }

  get modifierFunctions() {
    return {
      [DataParser.modifierTypes.DATE]: this.modifyDate.bind(this),
      [DataParser.modifierTypes.CURRENCY]: this.modifyCurrency.bind(this),
      [DataParser.modifierTypes.IBAN]: this.modifyIban.bind(this),
      [DataParser.modifierTypes.ARRAY]: this.modifyArray.bind(this)
    };
  }

  modifyDate(value, format) {
    return this.$filter('date')(value, format);
  }

  modifyCurrency(value, currency) {
    return this.$filter('currency')(value, currency);
  }

  modifyIban(value, highlight) {
    return this.$filter('iban')(value, highlight);
  }

  modifyArray(value, format = '<br>') {
    return this.$filter('join')(value, format);
  }

  filter(value, modifiersOrType, propertyOrArgs) {
    let modifier = {
      type: modifiersOrType,
      args: propertyOrArgs
    };
    if (angular.isArray(modifiersOrType)) {
      modifier = _.find(modifiersOrType, (modifier) => {
        return modifier.properties && _.includes(modifier.properties, propertyOrArgs);
      });
    }
    let modifierFunction = modifier && this.modifierFunctions[modifier.type];
    if (modifierFunction) {
      if (!angular.isArray(modifier.args)) {
        modifier.args = [modifier.args];
      }
      return modifierFunction(value, ...modifier.args);
    }
    return value;
  }

  unflatten(data) {
    if (Object(data) !== data || angular.isArray(data)) {
      return data;
    }
    const result = {};
    let cur, prop, idx, last, temp;
    for(let p in data) {
      cur = result;
      prop = '';
      last = 0;
      do {
        idx = p.indexOf('.', last);
        temp = p.substring(last, idx !== -1 ? idx : undefined);
        cur = cur[prop] || (cur[prop] = (!isNaN(parseInt(temp)) ? [] : {}));
        prop = temp;
        last = idx + 1;
      } while(idx >= 0);
      cur[prop] = data[p];
    }
    return result[''];
  }

  flatten(data) {
    const result = {};
    function recurse(cur, prop) {
      if (Object(cur) !== cur) {
        result[prop] = cur;
      }
      else if (angular.isArray(cur)) {
        for (let i = 0, ii = cur.length; i < ii; i++) {
          recurse(cur[i], prop ? `${prop}.${i}` : `${i}`);
          if (ii === 0) {
            result[prop] = [];
          }
          else {
            let isEmpty = true;
            for (let p in cur) {
              isEmpty = false;
              recurse(cur[p], prop ? `${prop}.${p}` : p);
            }
            if (isEmpty) {
              result[prop] = {};
            }
          }
        }
      }
    }
    recurse(data, '');

    return result;
  }
}

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
app.filter('format', DataParser.createFilter);
