import {Index} from './index.ts';

describe('Index', () => {
    describe('add', () => {
        it('should add two positive numbers', () => {
            let index = new Index();

            let summary: number = index.add(40, 2);

            expect(summary).toEqual(42);
        });
    });
});