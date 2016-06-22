import { beforeEachProviders, describe, inject, it } from '@angular/core/testing';

import { ReverseStringComponent } from './reverseString.component.ts';

describe('ReverseStringComponent', () => {

    beforeEachProviders(() => [
        ReverseStringComponent
    ]);

    it('should be created', inject([ReverseStringComponent], (reverseStringComponent: ReverseStringComponent) => {
        expect(reverseStringComponent).toBeDefined();
    }));

    describe('reverseString()', () => {

        it('should be return \'eppilihp\' for \'philippe\'', inject([ReverseStringComponent], (reverseStringComponent: ReverseStringComponent) => {
            expect(reverseStringComponent.reverseString('philippe')).toEqual('eppilihp');
        }));

    });

});