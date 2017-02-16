import {Component} from "@angular/core";
import template from "./app.html";
import {Http} from "@angular/http";
import {KeycloakService} from "../security/keycloak";
import {RouterOutlet, ROUTER_DIRECTIVES} from "@angular/router";
//import {RouteConfig} from "@angular/router-deprecated";

//import {router} from "./router";

@Component({
    selector: 'my-app',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    template: template
})
//@RouteConfig(router.config)
export class AppComponent {
  /*  static get parameters() {
        return [[Http], [KeycloakService]];
    }

    constructor(http:Http, kc:KeycloakService) {
        this._http = http;
        this._kc = kc;
    }*/
}
