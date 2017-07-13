"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var keycloak_service_1 = require("../security/keycloak.service");
var api_service_1 = require("../security/api.service");
var word_service_1 = require("../trainer/service/word.service");
var keycloak_http_1 = require("../security/keycloak.http");
var app_component_1 = require("./app.component");
var login_component_1 = require("../security/login.component");
var word_component_1 = require("../trainer/component/word.component");
var word_table_component_1 = require("../trainer/component/table/word.table.component");
var app_routing_module_1 = require("./app-routing.module");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            ngx_datatable_1.NgxDatatableModule
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            word_component_1.WordComponent,
            word_table_component_1.WordTableComponent
        ],
        providers: [
            keycloak_service_1.KeycloakService, api_service_1.ApiService, word_service_1.WordService,
            {
                provide: http_1.Http,
                useFactory: function (backend, defaultOptions, keycloakService) { return new keycloak_http_1.KeycloakHttp(backend, defaultOptions, keycloakService); },
                deps: [http_1.XHRBackend, http_1.RequestOptions, keycloak_service_1.KeycloakService]
            },
            {
                provide: common_1.LocationStrategy,
                useClass: common_1.HashLocationStrategy
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map