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

        it('should be return true for \'number\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('number')).toEqual(true);
        }));

        it('should be return true for \'a\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('a')).toEqual(true);
        }));

        it('should be return true for \'z\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('z')).toEqual(true);
        }));

        it('should be return false for \'aa\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('aa')).toEqual(false);
        }));

        it('should be return false for \'animal\'', inject([UniqueCharactersComponent], (uniqueCharactersComponent: UniqueCharactersComponent) => {
            expect(uniqueCharactersComponent.hasAllUniqueCharacters('animal')).toEqual(false);
        }));

    });

});
