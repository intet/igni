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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var word_1 = require("../../service/word");
var word_service_1 = require("../../service/word.service");
var WordTableComponent = (function () {
    function WordTableComponent(wordService) {
        this.wordService = wordService;
        this.data = [new word_1.Word('4cf957b4-77e4-4906-b0d8-4d5f324fb91', 'word', 'слово'),
            new word_1.Word('4cf957b4-77e4-4906-b0d8-4d5f324fb92', 'tree', 'дерево')];
        this.columns = [{ prop: 'original' }, { name: 'translation' }];
    }
    WordTableComponent.prototype.add = function () {
        this.wordService.saveWord(this.data[0]);
    };
    return WordTableComponent;
}());
WordTableComponent = __decorate([
    core_1.Component({
        selector: 'word-table',
        template: "\n<button type=\"button\" (click)=\"add()\">Add</button>\n<ngx-datatable [rows]=\"data\" [columns]=\"columns \" class=\"material\"></ngx-datatable>\n",
        providers: [word_service_1.WordService]
    }),
    __metadata("design:paramtypes", [word_service_1.WordService])
], WordTableComponent);
exports.WordTableComponent = WordTableComponent;
//# sourceMappingURL=word.table.component.js.map