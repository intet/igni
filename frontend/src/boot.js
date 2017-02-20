"use strict";
require("./shim");
require('rxjs/Rx');
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var keycloak_service_1 = require('./app/security/keycloak.service');
var app_module_1 = require('./app/boot/app.module');
/*
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from "@angular/router";
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from "@angular/http";
import {ApiService} from "./app/security/api.service"*/
keycloak_service_1.KeycloakService.init().then(function (o) {
    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
    platform.bootstrapModule(app_module_1.AppModule);
    /*  bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
     KeycloakService, ApiService,
     provide(LocationStrategy, {useClass: HashLocationStrategy})
     ]);*/
}, function (x) {
    window.location.reload();
});
//# sourceMappingURL=boot.js.map