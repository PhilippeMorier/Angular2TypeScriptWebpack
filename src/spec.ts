import { setBaseTestProviders } from '@angular/core/testing';
import { TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS } from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

let requirePreventingTs2339AboutNonExistingContext: any = require;
let testContext: any = requirePreventingTs2339AboutNonExistingContext.context('./app', true, /\.spec\.ts/);
testContext.keys().map(testContext);