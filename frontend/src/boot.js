import "./shim";
import "rxjs/Rx";
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from "angular2/router";
import {TRANSLATE_PROVIDERS} from "ng2-translate/ng2-translate";
import {HTTP_PROVIDERS} from "angular2/http";
import {KeycloakService} from "./app/security/keycloak";
import {AppComponent} from "./app/boot/app";
import {WordService} from "./app/trainer/service/word.service";
import {provide} from 'angular2/core';

KeycloakService.init().then(
    o=> {
        bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
            KeycloakService, TRANSLATE_PROVIDERS, WordService,
            provide(LocationStrategy, {useClass: HashLocationStrategy})
        ]);
    },
    x=> {
        window.location.reload();
    }
);