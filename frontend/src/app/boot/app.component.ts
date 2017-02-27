import {Component} from "@angular/core";
import "rxjs/add/operator/map";

@Component({
    selector: 'my-app',
    template: `
<div id="content">
    <h1>Igni</h1>
    </div>
    <div id="navbar" >
    <ul class="nav navbar-nav">
    <li><a [routerLink]="['/login']">Login</a></li>
    <li><a [routerLink]="['/word']">Word</a></li>
    <li><a [routerLink]="['/table']">Table</a></li>
    </ul>
    </div>
    <div>
    <router-outlet></router-outlet>
</div>
`
})
export class AppComponent {

}