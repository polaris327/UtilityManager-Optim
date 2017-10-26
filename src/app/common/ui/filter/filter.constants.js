import { CompareMode } from '../../../components/home/home.constants';

/**
 * energy filter
 */

const EnergyFilterOptions = [{
  name: 'profile',
  type: 'buttons',
  typeOptions: [{
    id: 'private',
    code: 'private',
    label: 'filter.value.private'
  },{
    id: 'business',
    code: 'business',
    label: 'filter.value.business'
  }]
}, {
  name: 'bonusIncluded',
  mapping: {
    true: 'compliant',
    false: 'non-compliant'
  },
  type: 'switch'
}, {
  name: 'onlyEcoTariffs',
  type: 'switch'
}, {
  name: 'maxContractDuration',
  type: 'slider',
  min: 6,
  max: 24,
  step: 1
}, {
  name: 'minDurationInMonths',
  translationKey: 'priceGuarantee',
  modelKey: 'priceGuarantee',
  type: 'slider',
  min: 1,
  max: 12,
  step: 1
}, {
  name: 'amount',
  translationKey: 'cancellationPeriodAmount',
  modelKey: 'cancellationPeriod',
  type: 'slider',
  min: 1,
  max: 12,
  step: 1
}, {
  name: 'maxContractProlongation',
  hideSeperator: true,
  type: 'slider',
  min: 0,
  max: 12,
  step: 1
}];

const ExtendedEnergyFilterOptions = [{
  name: 'prepayment',
  type: 'switch'
}, {
  name: 'includeTariffsWithDeposit',
  type: 'switch'
}, {
  name: 'includePackageTariffs',
  type: 'switch'
}, {
  name: 'onlyProductsWithGoodCustomerRating',
  type: 'switch'
}, {
  name: 'signupOnly',
  type: 'switch'
}, {
  name: 'includePackageTariffs',
  type: 'switch'
}, {
  name: 'includeNonCompliantTariffs',
  mapping: {
    true: false,
    false: true
  },
  type: 'switch'
}, {
  name: 'maxTariffsPerProvider',
  type: 'slider',
  min: 1,
  max: 12,
  step: 1
}, {
  name: 'offPeakPercentage',
  modelKey: 'usage',
  hideSeperator: true,
  type: 'slider',
  min: 1,
  max: 100,
  step: 1
}];

/**
 * gas filter
 */
const GasFilterOptions = [{
  name: 'profile',
  type: 'buttons',
  typeOptions: [{
    id: 'private',
    code: 'private',
    label: 'filter.value.private'
  },{
    id: 'business',
    code: 'business',
    label: 'filter.value.business'
  }]
}, {
  name: 'bonusIncluded',
  mapping: {
    true: 'compliant',
    false: 'non-compliant'
  },
  type: 'switch'
}, {
  name: 'onlyEcoTariffs',
  type: 'switch'
}, {
  name: 'minDurationInMonths',
  translationKey: 'priceGuarantee',
  modelKey: 'priceGuarantee',
  type: 'slider',
  min: 1,
  max: 12,
  step: 1
}, {
  name: 'maxContractProlongation',
  type: 'slider',
  min: 0,
  max: 12,
  step: 1
}, {
  name: 'heatingPowerInKW',
  modelKey: 'usage',
  hideSeperator: true,
  type: 'slider',
  min: 10,
  max: 100,
  step: 1
}];

const ExtendedGasFilterOptions =[{
  name: 'prepayment',
  type: 'switch'
}, {
  name: 'includeTariffsWithDeposit',
  type: 'switch'
}, {
  name: 'includePackageTariffs',
  type: 'switch'
}, {
  name: 'onlyProductsWithGoodCustomerRating',
  type: 'switch'
}, {
  name: 'signupOnly',
  type: 'switch'
}, {
  name: 'includePackageTariffs',
  type: 'switch'
}, {
  name: 'includeNonCompliantTariffs',
  mapping: {
    true: false,
    false: true
  },
  type: 'switch'
}, {
  name: 'maxTariffsPerProvider',
  type: 'slider',
  min: 1,
  max: 12,
  step: 1
}, {
  name: 'offPeakPercentage',
  modelKey: 'usage',
  hideSeperator: true,
  type: 'slider',
  min: 1,
  max: 100,
  step: 1
}];

/**
 * dsl filter
 */
const DslFilterOptions = [{
  name: 'telephonyFlatIncluded',
  mapping: {
    true: 'flatrate',
    false: 'non-flatrate'
  },
  type: 'switch'
}, {
  name: 'customerType',
  mapping: {
    true: 'existingCustomer',
    false: 'newCustomer'
  },
  type: 'switch'
}, {
  name: 'onlyProductsWithTvOptions',
  type: 'switch'
}, {
  name: 'accessModeSat',
  type: 'switch'
}, {
  name: 'accessModeLte',
  type: 'switch'
}, {
  name: 'accessModeDsl',
  type: 'switch'
}, {
  name: 'accessModeCable',
  type: 'switch'
}, {
  name: 'contractDuration',
  type: 'slider',
  min: 6,
  max: 24,
  step: 1
}];

const ExtendedDslFilterOptions =[{
  name: 'onlyProductsWithoutTrafficLimitation',
  type: 'switch'
}, {
  name: 'onlyProductsWithFreeHardware',
  type: 'switch'
}, {
  name: 'onlyProductsWithWlanHardware',
  type: 'switch'
}, {
  name: 'includeVoucher',
  type: 'switch'
}, {
  name: 'mobileOptionAvailable',
  type: 'switch'
}, {
  name: 'surfSofortOption',
  type: 'switch'
}];

export const FilterOptions = {
  [CompareMode.Electricity]: {
    filter: EnergyFilterOptions,
    extended: ExtendedEnergyFilterOptions
  }, 
  [CompareMode.Gas]: {
    filter: GasFilterOptions,
    extended: ExtendedGasFilterOptions
  }, 
  [CompareMode.Dsl]: {
    filter: DslFilterOptions,
    extended: ExtendedDslFilterOptions
  }
};