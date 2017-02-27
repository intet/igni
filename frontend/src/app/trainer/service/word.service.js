"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var word_1 = require("./word");
var util_1 = require("./util/util");
var api_service_1 = require("../../security/api.service");
var WordService = (function () {
    function WordService(api) {
        this.api = api;
        this.words = [new word_1.Word('4cf957b4-77e4-4906-b0d8-4d5f324fb91', 'word', 'слово'),
            new word_1.Word('4cf957b4-77e4-4906-b0d8-4d5f324fb92', 'tree', 'дерево')];
    }
    WordService.prototype.initNewTest = function () {
        this.activeWords = [];
        this.activeIndex = 0;
        for (var i = 0; i < this.words.length; i++) {
            var word = this.words[i];
            this.activeWords.push(word.id);
            this.activeWords.push(word.id);
        }
        util_1.Utils.shuffleArray(this.activeWords);
        this.loadData();
    };
    WordService.prototype.getWord = function (id) {
        return this.words.filter(function (word) { return word.id === id; })[0];
    };
    WordService.prototype.getActiveWord = function () {
        return this.getWord(this.activeWords[this.activeIndex]);
    };
    WordService.prototype.getNextWord = function () {
        this.activeIndex++;
        return this.getActiveWord();
    };
    WordService.prototype.testWord = function (word, text) {
        return new RegExp(text.toLowerCase()).test(word.translation.toLowerCase());
    };
    /**
     * Работа с api
     */
    WordService.prototype.loadData = function () {
        var service = this;
        this.api.post("wordService/getWords").then(function (res) { return service.doSomething(res); }, function (error) {
            console.log(error);
        });
    };
    WordService.prototype.saveWord = function (word) {
        var service = this;
        var params = { word: word };
        this.api.post("wordService/saveWord", params).then(function (res) { return service.doSomething(res); }, function (error) {
            console.log(error);
        });
    };
    WordService.prototype.doSomething = function (Response) {
    };
    WordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], WordService);
    return WordService;
}());
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map