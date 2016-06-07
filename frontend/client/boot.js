import "./shim";
import "rxjs/Rx";
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS} from "angular2/router";
import {TRANSLATE_PROVIDERS} from "ng2-translate/ng2-translate";
import {HTTP_PROVIDERS} from "angular2/http";
import {KeycloakService} from "./app/security/keycloak";
import {AppComponent} from "./app/boot/app";


KeycloakService.init().then(
    o=> {
        bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, KeycloakService, TRANSLATE_PROVIDERS]);
    },
    x=> {
        window.location.reload();
    }
);