import {Component} from "@angular/core"
import {Word} from  "../../service/word"
import {WordService} from "../../service/word.service";

@Component({
    selector:'word-table',
    template:`
<button type="button" (click)="add()">Add</button>
<table class="table table-striped">
    <thead>
    <tr>
        <th style="width: 50%">Word</th>
        <th style="width: 50%">Translation</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of data">
        <td>{{item.original}}</td>
        <td>{{item.translation}}</td>
    </tr>
    </tbody>
</table>
`,
    providers:[WordService]
})
export class WordTableComponent {
    data = [new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb91', 'word', 'слово'),
        new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb92', 'tree', 'дерево')];

    constructor(private wordService:WordService) {}
    add(){
        this.wordService.saveWord(this.data[0]);
    }
}