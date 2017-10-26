import { InjectableClass } from '@fino/lib-injection';
import { CompareMode } from '../../../components/home/home.constants';

export class FilterService {
  constructor(FilterOptions) {
    'ngInject';
    this.options = FilterOptions;
  }

  activate(type, model) {
    this.filter = this.options[type];
    this.bindModelsTo(this.filter, model);
  }

  getFilter() {
    return this.filter;
  }

  getDefaultFilterValues(type) {
    switch (type) {
      case CompareMode.Electricity:
        return {
          profile: 'private',
          bonusIncluded: true,
          maxContractDuration: 24,
          onlyEcoTariffs: false,
          priceGuarantee: {
            minDurationInMonths: 12
          },
          cancellationPeriod: {
            amount: 6,
            unit: 'week'
          },
          maxContractProlongation: 0,
          prepayment: true,
          includeTariffsWithDeposit: true,
          includePackageTariffs: true,
          onlyProductsWithGoodCustomerRating: true,
          includeNonCompliantTariffs: false,
          maxTariffsPerProvider: 2,
          usage: {
            offPeakPercentage: 0
          },
          onlyRegionalTariffs: false,
          signupOnly: false
        };
    
      case CompareMode.Gas:
        return {
          profile: 'private',
          bonusIncluded: true,
          onlyEcoTariffs: false,
          priceGuarantee: {
            minDurationInMonths: 3
          },
          maxContractProlongation: 0,
          prepayment: true,
          includeTariffsWithDeposit: true,
          includePackageTariffs: true,
          onlyProductsWithGoodCustomerRating: true,
          includeNonCompliantTariffs: true,
          maxTariffsPerProvider: 2,
          usage: {
            heatingPowerInKW: 31
          },
          onlyRegionalTariffs: false,
          signupOnly: false
        };

      case CompareMode.Dsl:
        return {
          telephonyFlatIncluded: true,
          customerType: true,
          contractDuration: 24,
          onlyProductsWithTvOptions: false,
          accessModeCable: true,
          accessModeLte: false,
          accessModeSat: true,
          accessModeDsl: true,
          onlyProductsWithoutTrafficLimitation: true,
          onlyProductsWithFreeHardware: false,
          onlyProductsWithWlanHardware: false,
          includeVoucher: false,
          mobileOptionAvailable: false,
          surfSofortOption: false
        };
    }
  }
  
  bindModelsTo(filters, model) {
    _.each(filters, (val, key) => {
      _.each(val, f => {
        f.model = f.modelKey ? _.get(model, f.modelKey) : model;
      });
    });
  }

  applyMappings(filters, model) {
    _.each(filters, (val, key) => {
      _.each(val, f => {
        if (f.mapping && f.model[f.name]) {
          const valueKey = f.modelKey ? `${f.modelKey}.${f.name}` : f.name;
          const mappedValue = f.mapping[f.model[f.name]];
          _.set(model, valueKey, mappedValue);
        }
      });
    });
    return model;
  }

  formatModel(model) {
    const formattedModel = _.cloneDeep(model);
    return this.applyMappings(this.filter, formattedModel);
  }
}
