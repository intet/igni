"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Word = (function () {
    function Word(id, original, translation) {
        this._countAttempts = 0;
        this._countSuccess = 0;
        this._countFail = 0;
        this._lineSuccess = 0;
        this.id = id;
        this.original = original;
        this.translation = translation;
    }
    Word.prototype.attempt = function (success) {
        this._countAttempts++;
        if (success) {
            this._lineSuccess++;
            this._countSuccess++;
        }
        else {
            this._lineSuccess = 0;
            this._countFail++;
        }
    };
    Object.defineProperty(Word.prototype, "countAttempts", {
        get: function () {
            return this._countAttempts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Word.prototype, "countSuccess", {
        get: function () {
            return this._countSuccess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Word.prototype, "countFail", {
        get: function () {
            return this._countFail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Word.prototype, "lineSuccess", {
        get: function () {
            return this._lineSuccess;
        },
        enumerable: true,
        configurable: true
    });
    return Word;
}());
exports.Word = Word;
//# sourceMappingURL=word.js.map