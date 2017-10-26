/**
 *  The gulp tasks are defined in the @fino/ng1-gulp package.
 */
import path from 'path';
import gulp from 'gulp';
import toolchain from '@fino/ng1-gulp';

toolchain.setup({
  proxyContext: ['/verivox', '/api'],
  // The path to the root directory of this application
  root: path.join(__dirname, './'),

  // Environment specific values
  env: {
    production: {
      getHost: (tenant) => {
        return `https://optimusprime.fino.digital`;
      },
      port: 443
    },
    testing: {
      getHost: (tenant) => {
        return `https://optimusprime-testing.fino.digital`;
      },
      port: 443
    },
    development: {
      getHost: (tenant) => {
        return `https://optimusprime-dev.fino.digital`;
      },
      port: 443
    },
    local: {
      getHost: (tenant) => {
        return `http://localhost`;
      },
      port: 8003
    }
  }
});

toolchain.register(gulp);
