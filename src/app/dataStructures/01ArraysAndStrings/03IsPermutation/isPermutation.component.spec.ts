import { beforeEachProviders, describe, expect, inject, it } from '@angular/core/testing';

import { IsPermutationComponent } from './isPermutation.component.ts';

describe('IsPermutationComponent', () => {

    beforeEachProviders(() => [
        IsPermutationComponent
    ]);

    it('should be created', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
        expect(isPermutationComponent).toBeDefined();
    }));

    describe('isPermutation()', () => {

        it('should return true for \'eppilihp\' and \'philippe\'', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
            expect(isPermutationComponent.isPermutation('eppilihp', 'philippe')).toBeTruthy();
        }));

        it('should return true for \'fooof\' and \'ofofo\'', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
            expect(isPermutationComponent.isPermutation('fooof', 'ofofo')).toBeTruthy();
        }));

        it('should return true for \'abc\' and \'aac\'', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
            expect(isPermutationComponent.isPermutation('abc', 'aac')).toBeFalsy();
        }));

        it('should return false it string have different length', inject([IsPermutationComponent], (isPermutationComponent: IsPermutationComponent) => {
            expect(isPermutationComponent.isPermutation('123', '1234')).toBeFalsy();
        }));

    });

});
