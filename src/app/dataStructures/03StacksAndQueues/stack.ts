export class Stack<T> {
    private top: Node<T>;

    public push(data: T): void {
        let toPush: Node<T> = new Node<T>(data);

        toPush.next = this.top;
        this.top = toPush;
    }

    public pop(): T {
        let topData: T = this.top.data;
        this.top = this.top.next;

        return topData;
    }

    public peek(): T {
        return this.top.data;
    }

    public isEmpty(): boolean {
        return (this.top === undefined);
    }

    public toString(): string {
        let current: Node<T> = this.top;

        let stringResult: string = '';
        while (current) {
            stringResult += current.data + ' → ';
            current = current.next;
        }

        return stringResult;
    }
}

class Node<T> {
    public data: T;
    public next: Node<T>;

    public constructor(data: T) {
        this.data = data;
    }
}
