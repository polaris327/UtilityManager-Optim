export const Process = [{
  key: 'electricity',
  type: 'input'
}, {
  key: 'gas',
  type: 'question',
  value: (model) => {
    return model.energy - model.electricity;
  }
}, {
  key: 'dsl',
  type: 'question',
  value: (model) => {
    return model.dsl;
  }
}]