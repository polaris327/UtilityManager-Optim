export const CompareMode = {
  Electricity: 'electricity',
  Gas: 'gas',
  Dsl: 'dsl'
};

export const SortTabs = {
  [CompareMode.Electricity]: ['totalCosts', 'workPrice'],
  [CompareMode.Gas]: ['totalCosts', 'workPrice'],
  [CompareMode.Dsl]: ['totalCosts', 'download'],
  descending: ['download']
}
