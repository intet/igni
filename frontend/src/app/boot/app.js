import {Component} from "angular2/core";
import {TranslateService, TranslatePipe} from "ng2-translate/ng2-translate";
import template from "./app.html";
import {Http} from "angular2/http";
import {KeycloakService} from "../security/keycloak";
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from "angular2/router";
import {router} from "./router";
//import { translation } from '../../../i18n/en';
//import { router } from './router';

@Component({
    selector: 'my-app',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    template: template,
    pipes: [TranslatePipe]
})
@RouteConfig(router.config)
export class AppComponent {
    static get parameters() {
        return [[TranslateService], [Http], [KeycloakService]];
    }

    constructor(translateService, http:Http, kc:KeycloakService) {
        this._http = http;
        this._kc = kc;
    }
}
