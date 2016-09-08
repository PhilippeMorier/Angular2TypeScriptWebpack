import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component.ts';
import { APP_ROUTES } from './app.routes.ts';
import { ConceptsAndAlgorithmsComponent } from './conceptsAndAlgorithms/conceptsAndAlgorithms.component.ts';
import { DataStructuresComponent } from './dataStructures/dataStructures.component.ts';
import { ArraysAndStringsComponent } from './dataStructures/01ArraysAndStrings/arraysAndStrings.component.ts';
import { LinkedListsComponent } from './dataStructures/02LinkedLists/linkedLists.component.ts';
import { UniqueCharactersComponent } from './dataStructures/01ArraysAndStrings/01UniqueCharacters';
import { ReverseStringComponent } from './dataStructures/01ArraysAndStrings/02ReverseString/reverseString.component.ts';
import { IsPermutationComponent } from './dataStructures/01ArraysAndStrings/03IsPermutation/isPermutation.component.ts';
import { ReplaceAllSpacesComponent } from './dataStructures/01ArraysAndStrings/04ReplaceAllSpaces/replaceAllSpaces.component.ts';
import { IsPalindromeComponent } from './dataStructures/02LinkedLists/07IsPalindrome/isPalindrome.component.ts';
import { RemoveDuplicatesComponent } from './dataStructures/02LinkedLists/01RemoveDuplicates/removeDuplicates.component.ts';
import { PartitionAroundValueComponent } from './dataStructures/02LinkedLists/04PartitionAroundValue/partitionAroundValue.component.ts';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,

        ConceptsAndAlgorithmsComponent,
        DataStructuresComponent,

        ArraysAndStringsComponent,
        UniqueCharactersComponent,
        ReverseStringComponent,
        IsPermutationComponent,
        ReplaceAllSpacesComponent,

        LinkedListsComponent,
        RemoveDuplicatesComponent,
        PartitionAroundValueComponent,
        IsPalindromeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES)
    ]
})
export class AppModule {
}
