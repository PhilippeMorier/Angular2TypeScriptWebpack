import { Component } from '@angular/core';
import { UniqueCharactersComponent } from './dataStructures/01ArraysAndStrings/01UniqueCharacters/uniqueCharacters.component.ts';

@Component({
    selector: 'cut-app',
    template: require('./app.component.html'),
    directives: [UniqueCharactersComponent]
})
export class AppComponent {
    public title: string = '@@@';
}
