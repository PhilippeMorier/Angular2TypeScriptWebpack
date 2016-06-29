import { beforeEachProviders, describe, expect, inject, it } from '@angular/core/testing';

import { UniqueCharactersComponent } from './uniqueCharacters.component.ts';

describe('UniqueCharacters', () => {

    beforeEachProviders(() => [
        UniqueCharactersComponent
    ]);

    it('should be created', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
        expect(uniqueCharactersComponent).toBeDefined();
    }));

    describe('hasAllUniqueCharacters()', () => {

        it('should return true for \'number\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('number')).toEqual(true);
        }));

        it('should return true for \'a\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('a')).toEqual(true);
        }));

        it('should return true for \'z\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('z')).toEqual(true);
        }));

        it('should return false for \'aa\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('aa')).toEqual(false);
        }));

        it('should return false for \'animal\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('animal')).toEqual(false);
        }));

        it('should return true for \'abcdefghijklmnopqrstuvwxyz\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
        }));

        it('should throw because of invalid character', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(() => uniqueCharactersComponent.hasAllUniqueCharacters('UPPERCASE')).toThrow();
        }));

    });

});
