import { RouterConfig } from '@angular/router';
import { LinkedListsComponent } from './linkedLists.component.ts';

export const LINKED_LISTS_ROUTES: RouterConfig = [
    {
        component: LinkedListsComponent,
        path: 'LinkedLists'
    }
] as RouterConfig;
