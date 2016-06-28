import { Component } from '@angular/core';

@Component({
    selector: 'cut-replace-all-spaces',
    template: require('./replaceAllSpaces.component.html')
})
export class ReplaceAllSpacesComponent {
    public replaceAllSpacesIn(text: string): string {

        let characters: string[] = text.split('');
        let insertIndex: number = text.length - 1;
        let readIndex: number = this.getLastLetterIndex(text);

        while (readIndex >= 0) {
            if (characters[readIndex] !== ' ') {
                characters[insertIndex] = text[readIndex];
            }
            else {
                characters[insertIndex] = '0';
                characters[--insertIndex] = '2';
                characters[--insertIndex] = '%';
            }

            insertIndex--;
            readIndex--;
        }

        return characters.join('');
    }

    private getLastLetterIndex(text: string): number {
        for (let i: number = text.length - 1; i >= 0; i--) {
            if (text[i] !== ' ') {
                return i;
            }
        }

        return 0;
    }
}
