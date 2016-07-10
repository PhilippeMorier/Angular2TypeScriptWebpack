import { RouterConfig } from '@angular/router';
import { ArraysAndStringsComponent } from './arraysAndStrings.component.ts';

export const ARRAYS_AND_STRINGS_ROUTES: RouterConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ArraysAndStrings'
    },
    {
        component: ArraysAndStringsComponent,
        path: 'ArraysAndStrings'
    }
] as RouterConfig;
