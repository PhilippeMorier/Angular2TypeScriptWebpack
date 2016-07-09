import { Component } from '@angular/core';
import { SingleLinkedList, Node } from '../01RemoveDuplicates/removeDuplicates.component.ts';

@Component({
    selector: 'cut-is-palindrome',
    template: require('./isPalindrome.component.html')
})
export class IsPalindromeComponent {
    public isPalindrome<T>(list: SingleLinkedList<T>): boolean {

        let dataStack: T[] = [];
        dataStack.push(list.firstNode.data);
        let slowRunner: Node<T> = list.firstNode;
        let fastRunner: Node<T> = list.firstNode.nextNode;

        let listLength: number = 2;
        while (fastRunner) {

            if (fastRunner.nextNode) {
                listLength++;

                if (fastRunner.nextNode.nextNode) {
                    listLength++;
                    dataStack.push(slowRunner.nextNode.data);
                }
            }

            slowRunner = slowRunner.nextNode;
            fastRunner = (fastRunner.nextNode) ? fastRunner.nextNode.nextNode : undefined;
        }

        let toCompare: Node<T> = (listLength % 2 === 0) ? slowRunner : slowRunner.nextNode;
        while (dataStack.length > 0) {
            let data: T = dataStack.pop();
            if (data !== toCompare.data) {
                return false;
            }

            toCompare = toCompare.nextNode;
        }

        return true;
    }
}
