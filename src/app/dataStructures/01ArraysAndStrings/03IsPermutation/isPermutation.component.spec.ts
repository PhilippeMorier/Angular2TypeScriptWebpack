import { beforeEachProviders, describe, inject, it } from '@angular/core/testing';

import { IsPermutationComponent } from './isPermutation.component.ts';

describe('IsPermutationComponent', () => {

    beforeEachProviders(() => [
        IsPermutationComponent
    ]);

    it('should be created', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
        expect(isPermutationComponent).toBeDefined();
    }));

    describe('isPermutation()', () => {

        it('should be return true for \'eppilihp\' and \'philippe\'', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
            expect(isPermutationComponent.isPermutation('eppilihp', 'philippe')).toBeTruthy();
        }));

        it('should be return true for \'fooof\' and \'ofofo\'', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
            expect(isPermutationComponent.isPermutation('fooof', 'ofofo')).toBeTruthy();
        }));

        it('should be return true for \'abc\' and \'aac\'', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
            expect(isPermutationComponent.isPermutation('abc', 'aac')).toBeFalsy();
        }));

    });

});