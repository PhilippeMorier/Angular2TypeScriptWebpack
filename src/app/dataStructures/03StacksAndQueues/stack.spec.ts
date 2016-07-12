import { Stack } from './stack.ts';

describe('Stack', () => {
    describe('isEmpty()', () => {
        it('should return true if stack is empty', () => {
            let stack: Stack<number> = new Stack<number>();

            stack.push(0);
            stack.push(1);
            stack.push(2);
            stack.pop();
            stack.pop();
            stack.pop();

            expect(stack.isEmpty()).toBeTruthy();
        });

        it('should return false if stack has at least one element', () => {
            let stack: Stack<number> = new Stack<number>();

            stack.push(0);
            stack.push(1);
            stack.push(2);

            expect(stack.isEmpty()).toBeFalsy();
        });
    });

    describe('peek()', () => {
        it('should return the top value', () => {
            let stack: Stack<number> = new Stack<number>();

            stack.push(0);
            stack.push(1);
            stack.push(2);

            expect(stack.peek()).toBe(2);
        });
    });

    describe('push()', () => {
        it('should return the full string representation', () => {
            let stack: Stack<number> = new Stack<number>();

            stack.push(0);
            stack.push(1);
            stack.push(2);

            expect(stack.toString()).toBe('2->1->0->');
        });
    });

    describe('pop()', () => {
        it('should remove top value and return it', () => {
            let stack: Stack<number> = new Stack<number>();

            stack.push(0);
            stack.push(1);
            stack.push(2);

            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
            expect(stack.pop()).toBe(0);
        });
    });
});
