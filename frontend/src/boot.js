"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var keycloak_service_1 = require("./app/security/keycloak.service");
var app_module_1 = require("./app/boot/app.module");
keycloak_service_1.KeycloakService.init().then(function (o) {
    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
    platform.bootstrapModule(app_module_1.AppModule);
}, function (x) {
    window.location.reload();
});
//# sourceMappingURL=boot.js.map