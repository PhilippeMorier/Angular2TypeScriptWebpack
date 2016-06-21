import { beforeEachProviders, async, describe, inject, it } from '@angular/core/testing';

import { ReverseStringComponent } from './reverseString.component.ts';

describe('ReverseStringComponent', () => {

    beforeEachProviders(() => [
        ReverseStringComponent
    ]);

    it('should be created', inject([ReverseStringComponent], (reverseStringComponent) => {
        expect(reverseStringComponent).toBeDefined();
    }));

    describe('reverseString()', () => {

        it('should be return \'eppilihp\' for \'philippe\'', inject([ReverseStringComponent], (reverseStringComponent) => {
            expect(reverseStringComponent.reverseString('philippe')).toEqual('eppilihp');
        }));

    });

});