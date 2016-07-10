import { Type } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component.ts';
import { APP_ROUTER_PROVIDERS } from './app/app.routes.ts';

bootstrap(AppComponent as Type, [
        APP_ROUTER_PROVIDERS
    ]).catch((error: Error) => console.error(error));
