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
var WordComponent = (function () {
    function WordComponent(wordService) {
        this.wordService = wordService;
    }
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
            template: "<div class=\"container col-4\" [ngClass]=\"{swing: invalid}\">\n    <form class=\"align-self-center table-bordered \">\n        <h1 class=\"text-center\">Test word</h1>\n        <p class=\"text-center\">{{word.original}}</p>\n        <div class=\"form-group\" >\n            <input class=\"col-md-12 media-heading\" [(ngModel)]=\"input\" name=\"input\" required type=\"text\" (keypress)=\"onEnter($event)\"/>\n        </div>\n        <p>{{input}}</p>\n    </form>\n</div>",
            styles: ["\n/*.ng-valid[required] {\n    border-left: 5px solid #42A948;\n}\n.ng-invalid {\n    border-left: 5px solid #a94442;\n}*/\n\n@-webkit-keyframes swing\n{\n    15%\n    {\n        -webkit-transform: translateX(5px);\n        transform: translateX(5px);\n    }\n    30%\n    {\n        -webkit-transform: translateX(-5px);\n        transform: translateX(-5px);\n    }\n    50%\n    {\n        -webkit-transform: translateX(3px);\n        transform: translateX(3px);\n    }\n    65%\n    {\n        -webkit-transform: translateX(-3px);\n        transform: translateX(-3px);\n    }\n    80%\n    {\n        -webkit-transform: translateX(2px);\n        transform: translateX(2px);\n    }\n    100%\n    {\n        -webkit-transform: translateX(0);\n        transform: translateX(0);\n    }\n}\n@keyframes swing\n{\n    15%\n    {\n        -webkit-transform: translateX(5px);\n        transform: translateX(5px);\n    }\n    30%\n    {\n        -webkit-transform: translateX(-5px);\n        transform: translateX(-5px);\n    }\n    50%\n    {\n        -webkit-transform: translateX(3px);\n        transform: translateX(3px);\n    }\n    65%\n    {\n        -webkit-transform: translateX(-3px);\n        transform: translateX(-3px);\n    }\n    80%\n    {\n        -webkit-transform: translateX(2px);\n        transform: translateX(2px);\n    }\n    100%\n    {\n        -webkit-transform: translateX(0);\n        transform: translateX(0);\n    }\n}\n.swing\n{\n    -webkit-animation: swing 1s ease;\n    animation: swing 1s ease;\n    -webkit-animation-iteration-count: 1;\n    animation-iteration-count: 1;\n}"
            ]
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map