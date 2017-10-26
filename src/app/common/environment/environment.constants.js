// The definition of each environment stage
export const environmentStage = {
  dev: 'dev',
  testing: 'testing'
};

// The available environment stages
export const environmentStages = [
  environmentStage.dev,
  environmentStage.testing
];

// The default environment values
export const environmentDefaults = {
  custom: 'fino',
  tenant: 'fino',
  stage: null,
  baseUrl: '/'
};

// The default environment pattern to parse the environment
//  [\w\-]+ match a single character present in the list below
//    Quantifier: + Between one and unlimited times, as many times as possible, giving back as needed [greedy]
//    \w match any word character [a-zA-Z0-9_]
//    \- matches the character - literally
//  (?!\w+) Negative Lookahead - Assert that it is impossible to match the regex below
//    \w+ match any word character [a-zA-Z0-9_]
//      Quantifier: + Between one and unlimited times, as many times as possible, giving back as needed [greedy]
//  i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
//  g modifier: global. All matches (don't return on first match)
export const environmentPattern = /[\w\-]+(?!\w+)/ig;
