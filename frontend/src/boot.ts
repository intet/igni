import "./shim";
import 'rxjs/Rx';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {KeycloakService} from './app/security/keycloak.service';
import {AppModule} from './app/boot/app.module';
/*
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from "@angular/router";
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import {ApiService} from "./app/security/api.service"*/

KeycloakService.init().then(
    o=>{
        const platform = platformBrowserDynamic();
        platform.bootstrapModule(AppModule);

        /*  bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
         KeycloakService, ApiService,
         provide(LocationStrategy, {useClass: HashLocationStrategy})
         ]);*/
    },
    x=>{
        window.location.reload();
    }
);