import { Component } from '@angular/core';

@Component({
    selector: 'cut-unique-characters',
    template: require('./uniqueCharacters.component.html')
})
export class UniqueCharactersComponent {
    public hasAllUniqueCharacters(toTestWord: string): boolean {
        let characterCounts: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let character of toTestWord) {
            if (characterCounts[this.mapCharacterToIndex(character)] > 0) {
                return false;
            }
            else {
                characterCounts[this.mapCharacterToIndex(character)]++;
            }
        }

        return true;
    }

    private mapCharacterToIndex(character: string): number {
        if (character.length > 1) {
            throw 'Parameter must be a single character.';
        }

        switch (character) {
            case 'a':
                return 0;
            case 'b':
                return 1;
            case 'c':
                return 2;
            case 'd':
                return 3;
            case 'e':
                return 4;
            case 'f':
                return 5;
            case 'g':
                return 6;
            case 'h':
                return 7;
            case 'i':
                return 8;
            case 'j':
                return 9;
            case 'k':
                return 10;
            case 'l':
                return 11;
            case 'm':
                return 12;
            case 'n':
                return 13;
            case 'o':
                return 14;
            case 'p':
                return 15;
            case 'q':
                return 16;
            case 'r':
                return 17;
            case 's':
                return 18;
            case 't':
                return 19;
            case 'u':
                return 20;
            case 'v':
                return 21;
            case 'w':
                return 22;
            case 'x':
                return 23;
            case 'y':
                return 24;
            case 'z':
                return 25;
            default:
                throw 'Parameter is not a valid letter.';
        }
    }
}