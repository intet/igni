import {Component} from "angular2/core";
import {TranslateService, TranslatePipe} from "ng2-translate/ng2-translate";
import template from "./app.html";
import {Http, Headers, RequestOptions, Response} from "angular2/http";
import {KeycloakService} from "../security/keycloak"
//import { RouteConfig } from 'angular2/router';
//import { translation } from '../../../i18n/en';
//import { router } from './router';

@Component({
    selector: 'my-app',
    // directives: [LoggedInRouterOutlet, MenuComponent],
    template: template,
    pipes: [TranslatePipe]
})
//@RouteConfig(router.config)
export class AppComponent {
    static get parameters() {
        return [[TranslateService], [Http], [KeycloakService]];
    }
    products = [];
    constructor(translateService, http:Http, kc:KeycloakService) {
        this._http = http;
        this._kc = kc;
        /* translateService.setTranslation('en', translation);
         translateService.setDefaultLang('en');
         translateService.use('en');*/
    }

    logout() {
        this._kc.logout();
    }

    reloadData() {
        //angular dont have http interceptor yet
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
