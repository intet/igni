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
var word_service_1 = require("../service/word.service");
var common_1 = require("@angular/common");
var word_component_html_1 = require("./word.component.html");
var word_component_css_1 = require("./word.component.css");
var WordComponent = (function () {
    function WordComponent(wordService) {
        this.wordService = wordService;
    }
    Object.defineProperty(WordComponent, "parameters", {
        get: function () {
            return [[word_service_1.WordService]];
        },
        enumerable: true,
        configurable: true
    });
    WordComponent.prototype.ngOnInit = function () {
        this.wordService.initNewTest();
        this.word = this.wordService.getActiveWord();
        this.invalid = false;
    };
    WordComponent.prototype.onEnter = function (e) {
        if (e.keyCode != 13)
            return;
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
    };
    WordComponent = __decorate([
        core_1.Component({
            selector: 'word-comp',
            template: word_component_html_1.default,
            styles: [word_component_css_1.default],
            directives: [common_1.NgClass],
            providers: [word_service_1.WordService]
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map