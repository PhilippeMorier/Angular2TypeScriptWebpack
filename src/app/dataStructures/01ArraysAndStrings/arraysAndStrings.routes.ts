import { Routes } from '@angular/router';

import { ArraysAndStringsComponent } from './arraysAndStrings.component.ts';

export const ARRAYS_AND_STRINGS_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ArraysAndStrings'
    },
    {
        component: ArraysAndStringsComponent,
        path: 'ArraysAndStrings'
    }
] as Routes;
