import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {KeycloakService} from "../security/keycloak.service";
import {AppComponent} from "./app.component";
import {KeycloakHttp} from "../security/keycloak.http";
import {ApiService} from "../security/api.service";
import {LoginComponent} from "../security/login.component";
import {WordComponent} from "../trainer/component/word.component";
import {WordTableComponent} from "../trainer/component/table/word.table.component";
import {WordService} from "../trainer/service/word.service";
import {AppRoutingModule} from "./app-routing.module";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        WordComponent,
        WordTableComponent
    ],
    providers: [
        KeycloakService, ApiService, WordService,
        {
            provide: Http,
            useFactory:
                (
                    backend: XHRBackend,
                    defaultOptions: RequestOptions,
                    keycloakService: KeycloakService
                ) => new KeycloakHttp(backend, defaultOptions, keycloakService),
            deps: [XHRBackend, RequestOptions, KeycloakService]
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}