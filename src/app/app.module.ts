import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [ AppComponent ],
    imports:      [
        BrowserModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ]
})
export class AppModule { }
