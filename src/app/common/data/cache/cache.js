import { app } from '../../../bootstrap/core';
import { LocalCacheFactory } from './cache.factory';

app.factory('cacheFactory', LocalCacheFactory);
