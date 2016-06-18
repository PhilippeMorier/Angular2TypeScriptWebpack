//import {setBaseTestProviders} from '@angular/core/testing';
//import { TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS } from '@angular/platform-browser-dynamic/testing';
//console.log('==================');
//console.log(setBaseTestProviders);
//setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

var testContext = require.context('./app', true, /\.spec\.ts/);
var modules = testContext.keys().map(testContext);