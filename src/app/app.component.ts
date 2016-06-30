import { Component } from '@angular/core';
import { UniqueCharactersComponent } from './dataStructures/01ArraysAndStrings/01UniqueCharacters/uniqueCharacters.component.ts';
import { ReverseStringComponent } from './dataStructures/01ArraysAndStrings/02ReverseString/reverseString.component.ts';
import { IsPermutationComponent } from './dataStructures/01ArraysAndStrings/03IsPermutation/isPermutation.component.ts';
import { ReplaceAllSpacesComponent } from './dataStructures/01ArraysAndStrings/04ReplaceAllSpaces/replaceAllSpaces.component.ts';
import { RemoveDuplicatesComponent } from './dataStructures/02LinkedLists/01RemoveDuplicates/removeDuplicates.component.ts';

@Component({
    directives: [
        UniqueCharactersComponent,
        ReverseStringComponent,
        IsPermutationComponent,
        ReplaceAllSpacesComponent,
        RemoveDuplicatesComponent
    ],
    selector: 'cut-app',
    template: require('./app.component.html')
})
export class AppComponent {
    public title: string = 'CUT App';
}
