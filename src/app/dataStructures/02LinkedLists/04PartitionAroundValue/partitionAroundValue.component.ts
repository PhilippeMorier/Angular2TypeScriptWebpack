import { Component } from '@angular/core';
import { SingleLinkedList, Node } from '../01RemoveDuplicates/removeDuplicates.component.ts';

@Component({
    selector: 'cut-partition-around-value',
    template: require('./partitionAroundValue.component.html')
})
export class PartitionAroundValueComponent {
    public list: SingleLinkedList<number> = new SingleLinkedList<number>(new Node(0));
    public listString: string;

    public constructor() {
        this.list.addNodeAtEnd(new Node(9));
        this.list.addNodeAtEnd(new Node(1));
        this.list.addNodeAtEnd(new Node(8));
        this.list.addNodeAtEnd(new Node(2));
        this.list.addNodeAtEnd(new Node(7));
        this.list.addNodeAtEnd(new Node(3));

        this.listString = this.list.toString();
    }

    public partitionAround<T>(list: SingleLinkedList<T>, value: T): SingleLinkedList<T> {
        let smallerOrEqualThanValueList: SingleLinkedList<T> = new SingleLinkedList<T>();
        let greaterThanValueList: SingleLinkedList<T> = new SingleLinkedList<T>();

        let currentNode: Node<T> = list.firstNode;
        do {
            if (currentNode.data <= value) {
                smallerOrEqualThanValueList.addNodeAtEnd(new Node(currentNode.data));
            }

            else {
                greaterThanValueList.addNodeAtEnd(new Node(currentNode.data));
            }

            currentNode = currentNode.nextNode;
        } while (currentNode);

        smallerOrEqualThanValueList.addNodeAtEnd(greaterThanValueList.firstNode);

        return smallerOrEqualThanValueList;
    }
}
