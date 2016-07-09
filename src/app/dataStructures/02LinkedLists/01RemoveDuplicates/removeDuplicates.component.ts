import { Component } from '@angular/core';

@Component({
    selector: 'cut-remove-duplicates',
    template: require('./removeDuplicates.component.html')
})
export class RemoveDuplicatesComponent {
    public list: SingleLinkedList<number> = new SingleLinkedList<number>(new Node(0));
    public listString: string;

    public constructor() {
        this.list.addNodeAtEnd(new Node(1));
        this.list.addNodeAtEnd(new Node(2));
        this.list.addNodeAtEnd(new Node(0));
        this.list.addNodeAtEnd(new Node(1));
        this.list.addNodeAtEnd(new Node(2));
        this.list.addNodeAtEnd(new Node(0));
        this.list.addNodeAtEnd(new Node(1));
        this.list.addNodeAtEnd(new Node(2));

        this.listString = this.list.toString();
    }

    public removeDuplicatesInList<T>(list: SingleLinkedList<T>): SingleLinkedList<T> {
        let currentNode: Node<T> = list.firstNode.nextNode;
        let lastUniqueNode: Node<T> = list.firstNode;
        let occuranceCounts: T[] = [list.firstNode.data];

        do {
            if (occuranceCounts.indexOf(currentNode.data) < 0) {
                occuranceCounts.push(currentNode.data);
                lastUniqueNode.nextNode = currentNode;
                lastUniqueNode = currentNode;
            }

            currentNode = currentNode.nextNode;
        } while (currentNode);

        lastUniqueNode.nextNode = undefined;

        return list;
    }
}

export class SingleLinkedList<T> {
    public firstNode: Node<T>;
    public lastNode: Node<T>;

    public constructor(firstNode?: Node<T>) {
        if (firstNode) {
            this.firstNode = firstNode;
            this.lastNode = firstNode;
        }
    }

    public addNodeAtEnd(node: Node<T>): void {
        if (!this.lastNode) {
            this.constructor(node);

            return;
        }

        this.lastNode.nextNode = node;
        this.lastNode = node;
    }

    public toString(): string {
        let currentNode: Node<T> = this.firstNode;
        let result: string = '';

        do {
            result += currentNode.data + ' → ';
            currentNode = currentNode.nextNode;
        } while (currentNode);

        return result;
    }
}

export class Node<T> {
    public nextNode: Node<T>;

    public constructor(public data: T) {
    }
}
