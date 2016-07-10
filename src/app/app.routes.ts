import { provideRouter, RouterConfig } from '@angular/router';

import { DATA_STRUCTURES_ROUTES } from './dataStructures/dataStructures.routes.ts';
import { CONCEPTS_AND_ALGORITHMS_ROUTES } from './conceptsAndAlgorithms/conceptsAndAlgorithms.routes.ts';

export const appRoutes: RouterConfig = [
    ...DATA_STRUCTURES_ROUTES,
    ...CONCEPTS_AND_ALGORITHMS_ROUTES
] as RouterConfig;

export const APP_ROUTER_PROVIDERS: any = [
    provideRouter(appRoutes)
];
