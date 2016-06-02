import {Component, OnInit} from "angular2/core";
import {Word} from "../service/word";
import {WordService} from "../service/word.service";
import {NgClass} from 'angular2/common';


@Component({
    selector: 'word-comp',
    templateUrl: 'app/trainer/component/word.component.html',
    styleUrls:['app/trainer/component/word.component.css'],
    directives: [NgClass]
})
export class WordComponent implements OnInit {
    word:Word;
    input:String;
    invalid:boolean;
    constructor(private _wordService:WordService) {
    }

    ngOnInit() {
        this._wordService.initNewTest();
        this.word =this._wordService.getActiveWord();
        this.invalid = false;
    }
    onEnter(e:any) {
        if (e.keyCode != 13)return;
        e.preventDefault();
        if (this._wordService.testWord(this.word, this.input)) {
            this.word = this._wordService.getNextWord();
            this.input = '';
            this.invalid = false;
        }
        else {
            this.input = '';
            this.invalid = true;
            var component = this;
            setTimeout(function () {
                component.invalid = false;
            }, 1000);
            
        }
    }
}