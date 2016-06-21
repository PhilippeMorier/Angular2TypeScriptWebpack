import { Component } from '@angular/core';
import { UniqueCharactersComponent } from './dataStructures/01ArraysAndStrings/01UniqueCharacters/uniqueCharacters.component.ts';
import { ReverseStringComponent } from './dataStructures/01ArraysAndStrings/02ReverseString/reverseString.component.ts';

@Component({
    selector: 'cut-app',
    template: require('./app.component.html'),
    directives: [UniqueCharactersComponent, ReverseStringComponent]
})
export class AppComponent {
    public title: string = '@@@';
}
