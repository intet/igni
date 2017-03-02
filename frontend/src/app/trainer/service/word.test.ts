import {Word} from "./word";
import {WordService} from "./word.service";
import {Utils} from "./util/util";
export class WordTest {
    private _activeWords: String[];
    private _activeIndex: number;
    private _invalid: boolean;

    constructor(private wordService: WordService, activeWords: String[]) {
        this._activeWords = activeWords;
        this._activeIndex = 0;
    }

    getActiveWord(): Word {
        return this.wordService.getWord(this._activeWords[this._activeIndex]);
    }

    getNextWord(): Word {
        let activeWord = this.getActiveWord();
        activeWord.attempt(this._invalid);
        if (this._invalid) {
            let index = Utils.randomNumber(Math.min(this._activeIndex + 2, this._activeWords.length), this._activeWords.length);
            this._activeWords.splice(index,0,activeWord.id);
        }
        this._activeIndex++;
        this._invalid = false;
        return this.getActiveWord();
    }

    markInvalid() {
        this._invalid = true;
    }

}