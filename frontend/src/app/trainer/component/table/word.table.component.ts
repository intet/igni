import {Component} from "@angular/core"
import {Word} from  "../../service/word"
import {WordService} from "../../service/word.service";

@Component({
    selector:'word-table',
    template:`
<button type="button" (click)="add()">Add</button>
<ngx-datatable [rows]="data" [columns]="columns " class="material"></ngx-datatable>
`,
    providers:[WordService]
})
export class WordTableComponent {
    data = [new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb91', 'word', 'слово'),
        new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb92', 'tree', 'дерево')];
    columns  = [{prop:'original'}, {name:'translation'}];
    constructor(private wordService:WordService) {}
    add(){
        this.wordService.saveWord(this.data[0]);
    }
}