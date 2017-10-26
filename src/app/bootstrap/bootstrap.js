/**
 * This file is the main entry point for the entire app.
 *
 * If the application is being bundled, this is where the bundling process
 * starts.  If the application is being loaded by an es6 module loader, this
 * is the entry point.
 *
 * Point Webpack or SystemJS to this file.
 *
 * This module imports all the different parts of the application:
 * - 3rd party Libraries and app core module
 * - Services
 * - Components
 * - Submodules
 * - Top-level states
 * - UI-Router Transition Hooks
 */

// Import the core app module
import { app } from './core';

// Import Vendors
import _ from 'lodash';

// Import customization
import { bootstrap } from '@fino/ng1-customization/src/customization';
import { Environment } from '@fino/ng1-environment/lib';
Environment.defaults.custom = 'fino';

// Import Configs
import '../config/decorator/promise';
import '../config/translation/translation';

// Import Commons
import '../common/common';
import '../common/data/data';
import '../common/data/cache/cache';
import '../common/environment';

// Import the REST APIs
// These register themselves as angular services
import '../common/data/dataSource';

// Import Styles
import 'normalize.css';
import 'font-awesome-sass-loader';

// Import the components that make up the main subsections of the application
// Each submodule registers its own states/services/components
import '../app';
import '../components/home/home';
import '../components/thankYou/thankYou';
import '../components/user/user';
import '../components/savings/savings';
import '../components/landingPage/landingPage';

// Introduce Vendors globally to make them injectable for tests
app.constant('_', _);

// Set env config as angular constant, defined by webpacks DefinePlugin
app.constant('envConfig', ENV_CONFIG);


// Bootstrap the application
bootstrap();

