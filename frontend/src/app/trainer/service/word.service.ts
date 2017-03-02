import {Injectable} from "@angular/core";
import {Word} from "./word";
import {Utils} from "./util/util";
import {ApiService} from "../../security/api.service";
import {Response} from "@angular/http";
import {WordTest} from "./word.test";


@Injectable()
export class WordService {
    private words = [new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb91', 'word', 'слово'),
        new Word('4cf957b4-77e4-4906-b0d8-4d5f324fb92', 'tree', 'дерево')];
    activeTest:WordTest;
    constructor(private api:ApiService) {}

    initNewTest() {
        let wordsForTest = [];
        for (let i = 0; i < this.words.length; i++) {
            let word = this.words[i];
            wordsForTest.push(word.id);
            wordsForTest.push(word.id);
        }
        Utils.shuffleArray(wordsForTest);
        this.activeTest = new WordTest(this, wordsForTest);
        this.loadData();
    }

    getWord(id:String) {
        return this.words.filter(word=>word.id === id)[0];
    }

    testWord(word:Word, text:String) {
        return new RegExp(text.toLowerCase()).test(word.translation.toLowerCase());
    }

    /**
     * Работа с api
     */
    loadData() {
        let service = this;
        this.api.post("wordService/getWords").then(
            (res:Response) => service.doSomething(res),
            error=> {
                console.log(error);
            }
        );
    }

    saveWord(word:Word) {
        let service = this;
        let params = {word: word};
        this.api.post("wordService/saveWord", params).then(
            (res:Response) => service.doSomething(res),
            error=> {
                console.log(error);
            }
        );
    }
    doSomething(Response :Response){

    }

}