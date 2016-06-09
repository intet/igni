import {Injectable} from "angular2/core";
import {Word} from "./word";
import {Utils} from "../util/util";

@Injectable()
export class WordService{
    words = [new Word('1','word','слово'),
    new Word('2','tree','дерево')];

    activeWords;
    activeIndex:number;

    initNewTest(){
        this.activeWords = [];
        this.activeIndex = 0;
        for(var i=0;i<this.words.length;i++){
            var word = this.words[i];
            this.activeWords.push(word.id);
            this.activeWords.push(word.id);
        }
        Utils.shuffleArray(this.activeWords);
    }

    getWord(id:String){
        return this.words.filter(word=>word.id===id)[0];
    }

    getActiveWord():Word {
        return this.getWord(this.activeWords[this.activeIndex]);
    }

    getNextWord():Word {
        this.activeIndex++;
        return this.getActiveWord();
    }


    testWord(word:Word, text:String){
        return new RegExp(text.toLowerCase()).test(word.translation.toLowerCase());
    }
}