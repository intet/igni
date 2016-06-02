import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "angular2/router";
import {WordComponent} from "./trainer/component/word.component";
import {WordService} from "./trainer/service/word.service";

@Component({
    selector:'my-app',
    template:`
    <h1>{{title}}</h1>
    <a [routerLink]="['Word']">Word</a> 
    <div><router-outlet></router-outlet></div>`,
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS, WordService]
})
@RouteConfig([{
    path: "/word",
    name: 'Word',
    component: WordComponent
}
])
export class AppComponent{
    title='Tour of heroes'
}