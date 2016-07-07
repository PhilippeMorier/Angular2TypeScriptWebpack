import { beforeEachProviders, describe, expect, inject, it } from '@angular/core/testing';

import { SingleLinkedList, Node } from '../01RemoveDuplicates/removeDuplicates.component.ts';
import { IsPalindromeComponent } from './isPalindrome.component.ts';

describe('PartitionAroundValueComponent', () => {

    beforeEachProviders(() => [
        IsPalindromeComponent
    ]);

    it('should be created', inject([IsPalindromeComponent], (isPalindromeComponent: IsPalindromeComponent) => {
        expect(isPalindromeComponent).toBeDefined();
    }));

    describe('partitionAround()', () => {

        it('should detect a palindrome with an even length', inject([IsPalindromeComponent], (isPalindromeComponent: IsPalindromeComponent) => {
            let list: SingleLinkedList<number> = new SingleLinkedList<number>();
            list.addNodeAtEnd(new Node(0));
            list.addNodeAtEnd(new Node(1));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(3));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(1));
            list.addNodeAtEnd(new Node(0));

            expect(isPalindromeComponent.isPalindrome<number>(list)).toBeTruthy();
        }));
        
        it('should detect a palindrome with an odd length', inject([IsPalindromeComponent], (isPalindromeComponent: IsPalindromeComponent) => {
            let list: SingleLinkedList<number> = new SingleLinkedList<number>();
            list.addNodeAtEnd(new Node(0));
            list.addNodeAtEnd(new Node(1));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(1));
            list.addNodeAtEnd(new Node(0));

            expect(isPalindromeComponent.isPalindrome<number>(list)).toBeTruthy();
        }));

    });

});