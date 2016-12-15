import { Routes } from '@angular/router';

import { DataStructuresComponent } from './dataStructures.component.ts';
import { ARRAYS_AND_STRINGS_ROUTES } from './01ArraysAndStrings/arraysAndStrings.routes.ts';
import { LINKED_LISTS_ROUTES } from './02LinkedLists/linkedLists.routes.ts';

export const DATA_STRUCTURES_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'DataStructures'
    },
    {
        children: [
            ...ARRAYS_AND_STRINGS_ROUTES,
            ...LINKED_LISTS_ROUTES
        ],
        component: DataStructuresComponent,
        path: 'DataStructures'
    }
];
