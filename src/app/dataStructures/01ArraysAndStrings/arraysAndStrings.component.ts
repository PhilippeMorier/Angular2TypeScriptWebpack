import { Component } from '@angular/core';

import { UniqueCharactersComponent } from './01UniqueCharacters';
import { ReverseStringComponent } from './02ReverseString/reverseString.component.ts';
import { IsPermutationComponent } from './03IsPermutation/isPermutation.component.ts';
import { ReplaceAllSpacesComponent } from './04ReplaceAllSpaces/replaceAllSpaces.component.ts';

@Component({
    directives: [
        UniqueCharactersComponent,
        ReverseStringComponent,
        IsPermutationComponent,
        ReplaceAllSpacesComponent
    ] as any[],
    template: require('./arraysAndStrings.component.html')
})
export class ArraysAndStringsComponent {
}
