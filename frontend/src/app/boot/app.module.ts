import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {KeycloakService} from "../security/keycloak.service";
import {AppComponent} from "./app.component";
import {KeycloakHttp} from "../security/keycloak.http";
import {ApiService} from "../security/api.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        KeycloakService, ApiService,
        {
            provide: Http,
            useFactory:
                (
                    backend: XHRBackend,
                    defaultOptions: RequestOptions,
                    keycloakService: KeycloakService
                ) => new KeycloakHttp(backend, defaultOptions, keycloakService),
            deps: [XHRBackend, RequestOptions, KeycloakService]
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}