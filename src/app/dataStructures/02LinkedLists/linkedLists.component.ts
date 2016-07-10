import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RemoveDuplicatesComponent } from './01RemoveDuplicates/removeDuplicates.component.ts';
import { PartitionAroundValueComponent } from './04PartitionAroundValue/partitionAroundValue.component.ts';
import { IsPalindromeComponent } from './07IsPalindrome/isPalindrome.component.ts';

@Component({
    directives: [
        ROUTER_DIRECTIVES,
        RemoveDuplicatesComponent,
        PartitionAroundValueComponent,
        IsPalindromeComponent
    ],
    template: require('./linkedLists.component.html')
})
export class LinkedListsComponent {
}
