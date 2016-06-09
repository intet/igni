import {Component, OnInit} from "angular2/core";
import {Word} from "../service/word";
import {WordService} from "../service/word.service";
import {NgClass} from "angular2/common";
import template from "./word.component.html";
import style from "./word.component.css";


@Component({
    selector: 'word-comp',
    template: template,
    styles: [style],
    directives: [NgClass],
    providers:[WordService]
})
export class WordComponent implements OnInit {
    word:Word;
    input:String;
    invalid:boolean;

    static get parameters() {
        return [[WordService]];
    }

    constructor(wordService:WordService) {
        this.wordService = wordService
    }

    ngOnInit() {
        this.wordService.initNewTest();
        this.word = this.wordService.getActiveWord();
        this.invalid = false;
    }

    onEnter(e:any) {
        if (e.keyCode != 13)return;
        e.preventDefault();
        if (this.wordService.testWord(this.word, this.input)) {
            this.word = this.wordService.getNextWord();
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