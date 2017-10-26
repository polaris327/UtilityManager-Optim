import { CompareMode } from '../../../components/home/home.constants';

export const ConfiguratorItems = [{
  icons: {
    default: 'single',
    [CompareMode.Dsl]: 'slow'
  },
  values: {
    [CompareMode.Electricity]: 2000,
    [CompareMode.Gas]: 2000,
    [CompareMode.Dsl]: 6,
  }
}, {
  icons: {
    default: 'partner',
    [CompareMode.Dsl]: 'medium'
  },
  values: {
    [CompareMode.Electricity]: 3500,
    [CompareMode.Gas]: 3500,
    [CompareMode.Dsl]: 16,
  }
},{
  icons: {
    default: 'smallFamily',
    [CompareMode.Dsl]: 'fast'
  },
  values: {
    [CompareMode.Electricity]: 4250,
    [CompareMode.Gas]: 4250,
    [CompareMode.Dsl]: 50,
  }
},{
  icons: {
    default: 'largeFamily',
    [CompareMode.Dsl]: 'rapid'
  },
  values: {
    [CompareMode.Electricity]: 5000,
    [CompareMode.Gas]: 5000,
    [CompareMode.Dsl]: 100
  }
}];

export const NeedsLocation = (type) => {
  return !type || type === CompareMode.Electricity || type === CompareMode.Gas;
} 

export const NeedsAreaCode = (type) => {
  return !type || type === CompareMode.Dsl;
}