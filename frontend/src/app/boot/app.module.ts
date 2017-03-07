import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Http, XHRBackend, RequestOptions} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {KeycloakService} from "../security/keycloak.service";
import {ApiService} from "../security/api.service";
import {WordService} from "../trainer/service/word.service";
import {KeycloakHttp} from "../security/keycloak.http";
import {AppComponent} from "./app.component";
import {LoginComponent} from "../security/login.component";
import {WordComponent} from "../trainer/component/word.component";
import {WordTableComponent} from "../trainer/component/table/word.table.component";
import {AppRoutingModule} from "./app-routing.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        NgxDatatableModule
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