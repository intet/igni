import {Component} from "@angular/core"
import template from "./word.table.component.html"
import {Word} from  "../../service/word"
import {WordService} from "../../service/word.service";

@Component({
    selector:'word-table',
    template:template,
    providers:[WordService]
})
export class WordTableComponent {
    data = [new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb91', 'word', 'слово'),
        new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb92', 'tree', 'дерево')];
    
    static get parameters() {
        return [[WordService]];
    }

    constructor(wordService:WordService) {
        this.wordService = wordService
    }
    add(){
        this.wordService.saveWord(this.data[0]);
    }
}