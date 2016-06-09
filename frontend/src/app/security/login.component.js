import {Component} from "angular2/core";
import template from "./login.component.html"
import {Http, Headers, RequestOptions, Response} from "angular2/http";
import {KeycloakService} from "../security/keycloak"


@Component({
    selector: 'login',
    template: template
})
export class LoginComponent {

    static get parameters() {
        return [[Http], [KeycloakService]];
    }
    
    constructor(http:Http, kc:KeycloakService) {
        this._http = http;
        this._kc = kc;
    }
    
    logout(){
        this._kc.logout();
    }

    reloadData() {
        let app = this;
        this._kc.getToken().then(
            token=> {
                let headers = new Headers({
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                });

                let options = new RequestOptions({headers: headers});

                this._http.get('api/wordService/getBook', options)
                    .subscribe((res:Response) => app.doSomething(res));

            },
            error=> {
                console.log(error);
            }
        );

    }
    doSomething(res){
        console.log(res);
    }
}