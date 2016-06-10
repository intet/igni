import {Component} from "angular2/core"
import template from "./word.table.component.html"
import {Word} from  "../../service/word"

@Component({
    selector:'word-table',
    template:template
})
export class WordTableComponent {
    data =  [new Word('1','word','слово'),
        new Word('2','tree','дерево')];
}