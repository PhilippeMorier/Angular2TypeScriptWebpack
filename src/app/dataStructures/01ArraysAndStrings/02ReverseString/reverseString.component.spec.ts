import { addProviders, inject } from '@angular/core/testing';

import { ReverseStringComponent } from './reverseString.component.ts';

describe('ReverseStringComponent', () => {

    beforeEach(() => addProviders([
        ReverseStringComponent
    ]));

    it('should be created', inject([ReverseStringComponent], (reverseStringComponent: ReverseStringComponent) => {
        expect(reverseStringComponent).toBeDefined();
    }));

    describe('reverseString()', () => {

        it('should return \'eppilihp\' for \'philippe\'', inject([ReverseStringComponent], (reverseStringComponent: ReverseStringComponent) => {
            expect(reverseStringComponent.reverseString('philippe')).toEqual('eppilihp');
        }));

    });

});
