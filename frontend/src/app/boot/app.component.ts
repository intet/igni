import {Component} from "@angular/core";
import "rxjs/add/operator/map";

@Component({
    selector: 'my-app',
    template: `
<nav id="navbar navbar-light bg-faded" >
    <a class="navbar-brand" [routerLink]="['/login']">Login</a>
    <a class="navbar-brand" [routerLink]="['/word']">Word</a>
    <a class="navbar-brand" [routerLink]="['/table']">Table</a>
</nav>
<div>
    <router-outlet></router-outlet>
</div>
`
})
export class AppComponent {

}