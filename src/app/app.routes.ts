import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DATA_STRUCTURES_ROUTES } from './dataStructures/dataStructures.routes.ts';
import { CONCEPTS_AND_ALGORITHMS_ROUTES } from './conceptsAndAlgorithms/conceptsAndAlgorithms.routes.ts';

const appRoutes: Routes = [
    ...DATA_STRUCTURES_ROUTES,
    ...CONCEPTS_AND_ALGORITHMS_ROUTES
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
