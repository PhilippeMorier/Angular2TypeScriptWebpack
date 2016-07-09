import { addProviders, inject } from '@angular/core/testing';

import { RemoveDuplicatesComponent, SingleLinkedList, Node } from './removeDuplicates.component.ts';

describe('RemoveDuplicatesComponent', () => {

    beforeEach(() => addProviders([
        RemoveDuplicatesComponent
    ]));

    it('should be created', inject([RemoveDuplicatesComponent], (removeDuplicatesComponent: RemoveDuplicatesComponent) => {
        expect(removeDuplicatesComponent).toBeDefined();
    }));

    describe('hasAllUniqueCharacters()', () => {

        it('should remove duplicate nodes', inject([RemoveDuplicatesComponent], (removeDuplicatesComponent: RemoveDuplicatesComponent) => {
            let list: SingleLinkedList<number> = new SingleLinkedList<number>(new Node(0));
            list.addNodeAtEnd(new Node(0));
            list.addNodeAtEnd(new Node(1));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(1));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(1));

            expect(removeDuplicatesComponent.removeDuplicatesInList(list).toString()).toEqual('0 → 1 → 2 → ');
        }));

    });

});
