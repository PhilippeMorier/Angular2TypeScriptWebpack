import { beforeEachProviders, describe, expect, inject, it } from '@angular/core/testing';

import { SingleLinkedList, Node } from '../01RemoveDuplicates/removeDuplicates.component.ts';
import { PartitionAroundValueComponent } from '../04PartitionAroundValue/partitionAroundValue.component.ts';

describe('PartitionAroundValueComponent', () => {

    beforeEachProviders(() => [
        PartitionAroundValueComponent
    ]);

    it('should be created', inject([PartitionAroundValueComponent], (partitionAroundValueComponent: PartitionAroundValueComponent) => {
        expect(partitionAroundValueComponent).toBeDefined();
    }));

    describe('partitionAround()', () => {

        it('should partition list', inject([PartitionAroundValueComponent], (partitionAroundValueComponent: PartitionAroundValueComponent) => {
            let list: SingleLinkedList<number> = new SingleLinkedList<number>(new Node(0));
            list.addNodeAtEnd(new Node(9));
            list.addNodeAtEnd(new Node(1));
            list.addNodeAtEnd(new Node(8));
            list.addNodeAtEnd(new Node(2));
            list.addNodeAtEnd(new Node(7));
            list.addNodeAtEnd(new Node(3));

            expect(partitionAroundValueComponent.partitionAround<number>(list, 5).toString()).toEqual('0 → 1 → 2 → 3 → 9 → 8 → 7 → ');
        }));

    });

});
