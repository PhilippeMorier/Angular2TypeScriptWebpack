import { Component } from '@angular/core';

@Component({
    selector: 'cut-is-permutation',
    template: require('./isPermutation.component.html')
})
export class IsPermutationComponent {
    public isPermutation(word: string, toCheckWord: string): boolean {
        if (word.length !== toCheckWord.length) {
            return false;
        }

        let wordCharactersCount: number[] = this.getCharactersCount(word);
        let toCheckWordCharactersCount: number[] = this.getCharactersCount(toCheckWord);

        for (let i: number = 0; i < wordCharactersCount.length; i++) {
            if (wordCharactersCount[i] !== toCheckWordCharactersCount[i]) {
                return false;
            }
        }

        return true;
    }

    private getCharactersCount(word: string): number[] {
        let characterCounts: number[] = this.createArrayWithInitialNumberOf(0, 256);

        for (let character of word) {
            characterCounts[character.charCodeAt(0)] = characterCounts[character.charCodeAt(0)] + 1;
        }

        return characterCounts;
    };

    private createArrayWithInitialNumberOf(initialValue: number, arrayLength: number): number[] {
        let toInitializeArray: number[] = [];
        for (let i: number = 0; i < arrayLength; i++) {
            toInitializeArray.push(initialValue);
        }

        return toInitializeArray;
    }
}