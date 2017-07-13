"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util/util");
var WordTest = (function () {
    function WordTest(wordService, activeWords) {
        this.wordService = wordService;
        this._activeWords = activeWords;
        this._activeIndex = 0;
    }
    WordTest.prototype.getActiveWord = function () {
        return this.wordService.getWord(this._activeWords[this._activeIndex]);
    };
    WordTest.prototype.getNextWord = function () {
        var activeWord = this.getActiveWord();
        activeWord.attempt(this._invalid);
        if (this._invalid) {
            var index = util_1.Utils.randomNumber(Math.min(this._activeIndex + 2, this._activeWords.length), this._activeWords.length);
            this._activeWords.splice(index, 0, activeWord.id);
        }
        this._activeIndex++;
        this._invalid = false;
        return this.getActiveWord();
    };
    WordTest.prototype.markInvalid = function () {
        this._invalid = true;
    };
    return WordTest;
}());
exports.WordTest = WordTest;
//# sourceMappingURL=word.test.js.map