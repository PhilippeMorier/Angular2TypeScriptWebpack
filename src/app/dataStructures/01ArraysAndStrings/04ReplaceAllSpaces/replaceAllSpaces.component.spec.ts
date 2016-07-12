import { addProviders, inject } from '@angular/core/testing';

import { ReplaceAllSpacesComponent } from './replaceAllSpaces.component.ts';

describe('ReplaceAllSpacesComponent', () => {

    beforeEach(() => addProviders([
        ReplaceAllSpacesComponent
    ]));

    it('should be created', inject([ReplaceAllSpacesComponent], (replaceAllSpacesComponent: ReplaceAllSpacesComponent) => {
        expect(replaceAllSpacesComponent).toBeDefined();
    }));

    describe('hasAllUniqueCharacters()', () => {

        it('should replace all spaces with %20', inject([ReplaceAllSpacesComponent], (replaceAllSpacesComponent: ReplaceAllSpacesComponent) => {
            expect(replaceAllSpacesComponent.replaceAllSpacesIn('Mr John Smith    ')).toEqual('Mr%20John%20Smith');
        }));

        it('should replace all spaces with %20 in a string with prefixed spaces', inject([ReplaceAllSpacesComponent], (replaceAllSpacesComponent: ReplaceAllSpacesComponent) => {
            expect(replaceAllSpacesComponent.replaceAllSpacesIn('   a      ')).toEqual('%20%20%20a');
        }));

        it('should replace nothing if there isn\'t any spaces', inject([ReplaceAllSpacesComponent], (replaceAllSpacesComponent: ReplaceAllSpacesComponent) => {
            expect(replaceAllSpacesComponent.replaceAllSpacesIn('NoSpacesToReplace')).toEqual('NoSpacesToReplace');
        }));

        it('should return empty string if one is provided', inject([ReplaceAllSpacesComponent], (replaceAllSpacesComponent: ReplaceAllSpacesComponent) => {
            expect(replaceAllSpacesComponent.replaceAllSpacesIn('')).toEqual('');
        }));

    });

});
