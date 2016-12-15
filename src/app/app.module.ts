import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [
        AppComponent,
        ROUTER_DIRECTIVES
    ],
    imports:      [
        BrowserModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ]
})
export class AppModule { }
