import "./shim";
import "rxjs/Rx";
import {bootstrap} from "@angular/platform-browser";
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {KeycloakService} from "./app/security/keycloak";
import {AppComponent} from "./app/boot/app";
import {ApiService} from "./app/security/api.service"
import {provide} from '@angular/core';

KeycloakService.init().then(
    o=> {
        bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
            KeycloakService, ApiService,
            provide(LocationStrategy, {useClass: HashLocationStrategy})
        ]);
    },
    x=> {
        window.location.reload();
    }
);