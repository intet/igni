import {Component} from "@angular/core";
import template from "./login.component.html";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {KeycloakService} from "../security/keycloak";
import {ApiService} from "./api.service";

@Component({
    selector: 'login',
    template: template
})
export class LoginComponent {

    static get parameters() {
        return [[Http], [KeycloakService], [ApiService]];
    }

    constructor(http:Http, kc:KeycloakService, api:ApiService) {
        this._http = http;
        this._kc = kc;
        this._api = api;
    }

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