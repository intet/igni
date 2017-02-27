import {Component, OnInit} from "@angular/core";
import {Word} from "../service/word";
import {WordService} from "../service/word.service";
import {NgClass} from "@angular/common";

@Component({
    selector: 'word-comp',
    template: `
<div class="col-md-2 col-md-offset-5 table-bordered " [ngClass]="{swing: invalid}">
    <form>
        <h1 class="text-center">Test word</h1>
        <p class="text-center">{{word.original}}</p>
     <!--   <div class="form-group" >
            <input class="col-md-12 media-heading" [(ngModel)]="input" required
                   type="text" (keypress)="onEnter($event)"/>
        </div>-->
        <p>{{input}}</p>
    </form>
</div>`,
    styles: [`/*.ng-valid[required] {
    border-left: 5px solid #42A948;
}
.ng-invalid {
    border-left: 5px solid #a94442;
}*/

@-webkit-keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
.swing
{
    -webkit-animation: swing 1s ease;
    animation: swing 1s ease;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}`],
    directives: [NgClass],
    providers:[WordService]
})
export class WordComponent implements OnInit {
    word:Word;
    input:String;
    invalid:boolean;

    constructor(private wordService:WordService) {
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