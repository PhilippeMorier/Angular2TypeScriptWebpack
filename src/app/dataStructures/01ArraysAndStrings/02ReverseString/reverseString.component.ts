import { Component } from '@angular/core';

@Component({
    selector: 'cut-reverse-string',
    template: require('./reverseString.component.html')
})
export class ReverseStringComponent {
    public reverseString(toReverseWord: string): string {
        let stack: string[] = [];

        for (let character of toReverseWord) {
            stack.push(character);
        }

        let reversedWord: string = '';
        for (let i: number = 0; i < toReverseWord.length; i++) {
            reversedWord += stack.pop();
        }

        return reversedWord;
    }
}