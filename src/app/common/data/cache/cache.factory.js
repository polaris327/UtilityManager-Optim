import _ from 'lodash';

export const LocalCacheDefault = {
  storageMode: 'localStorage'
};

export const LocalCacheFactory = function(CacheFactory) {
  'ngInject';

  const create = (cacheId, options = {}) => {
    if (!CacheFactory.get(cacheId)) {
      return CacheFactory.createCache(cacheId, _.defaults(options, LocalCacheDefault));
    }
    return CacheFactory.get(cacheId);
  };

  const get = (cacheId) => {
    return CacheFactory.get(cacheId);
  };

  return { create, get };
};
