import { Component } from '@angular/core';

@Component({
    selector: 'cut-replace-all-spaces',
    template: require('./replaceAllSpaces.component.html')
})
export class ReplaceAllSpacesComponent {
    public replaceAllSpacesIn(text: string): string {

        let textArray: string[] = text.split('');
        let insertIndex: number = text.length - 1;
        let readIndex: number = this.getLastLetterIndex(text);

        while (readIndex >= 0) {
            if (textArray[readIndex] !== ' ') {
                textArray[insertIndex] = text[readIndex];
            }
            else {
                textArray[insertIndex] = '0';
                textArray[--insertIndex] = '2';
                textArray[--insertIndex] = '%';
            }

            insertIndex--;
            readIndex--;
        }

        return textArray.join('');
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
