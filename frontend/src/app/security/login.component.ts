import {Component} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {KeycloakService} from "./keycloak.service";
import {ApiService} from "./api.service";

@Component({
    selector: 'login',
    template: `
<div>
    <button type="button" (click)="logout()">Sign Out</button>
    <button type="button" (click)="reloadData()">Reload</button>
</div>`
})
export class LoginComponent {

    constructor(private _http:Http, private _kc:KeycloakService, private _api:ApiService) {}

    logout() {
        this._kc.logout();
    }

    reloadData() {
        let app = this;
        this._api.get("wordService/getBook").then(
            (res:Response) => app.doSomething(res),
            error=> {
                console.log(error);
            }
        );
    }

    doSomething(res) {
        console.log(res);
    }
}