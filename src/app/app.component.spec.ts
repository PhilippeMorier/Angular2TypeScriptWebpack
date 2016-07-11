import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router, RouterOutletMap } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { addProviders, inject } from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { ConcreteType } from '@angular/compiler/src/facade/lang';

import { AppComponent } from './app.component.ts';

describe('AppComponent', () => {

    beforeEach(() => addProviders([
        AppComponent,
        LocationStrategy,
        RouterOutletMap,
        { provide: Router, useClass: class { public createUrlTree(): void {/* */} } },
        { provide: ActivatedRoute, useClass: class {/* */} }
    ]));

    it('should be created', inject([AppComponent], (appComponent: AppComponent) => {
        expect(appComponent).toBeDefined();
    }));

    it('should have title', inject([AppComponent], (appComponent: AppComponent) => {
        expect(appComponent.title).toEqual('CUT App');
    }));

    it('should show title if title is available',
        inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
            testComponentBuilder
                .createAsync(AppComponent as ConcreteType<AppComponent>)
                .then((fixture: ComponentFixture<AppComponent>) => {
                    let appComponent: AppComponent = fixture.debugElement.componentInstance;
                    let appComponentTemplate: DebugElement = fixture.debugElement.nativeElement;

                    appComponent.title = 'Test Title';
                    fixture.detectChanges();

                    expect(getDOM()
                        .querySelectorAll(appComponentTemplate, 'h1')
                        .length)
                        .toEqual(1);
                });
        })
    );

    it('should hide title if title is unavailable',
        inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
            testComponentBuilder
                .createAsync(AppComponent as ConcreteType<AppComponent>)
                .then((fixture: ComponentFixture<AppComponent>) => {
                    let appComponent: AppComponent = fixture.debugElement.componentInstance;
                    let appComponentTemplate: DebugElement = fixture.debugElement.nativeElement;

                    appComponent.title = undefined;
                    fixture.detectChanges();

                    expect(getDOM()
                        .querySelectorAll(appComponentTemplate, 'h1')
                        .length)
                        .toEqual(0);
                });
        })
    );
});
