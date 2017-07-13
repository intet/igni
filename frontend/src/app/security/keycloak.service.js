"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var KeycloakService = KeycloakService_1 = (function () {
    function KeycloakService() {
    }
    KeycloakService.init = function () {
        var keycloakAuth = new Keycloak('keycloak.json');
        KeycloakService_1.auth.loggedIn = false;
        return new Promise(function (resolve, reject) {
            keycloakAuth.init({ onLoad: 'login-required' })
                .success(function () {
                KeycloakService_1.auth.loggedIn = true;
                KeycloakService_1.auth.authz = keycloakAuth;
                KeycloakService_1.auth.logoutUrl = keycloakAuth.authServerUrl +
                    "/realms/igniRealm/protocol/openid-connect/logout?redirect_uri=" +
                    window.location.href;
                resolve();
            })
                .error(function () {
                reject();
            });
        });
    };
    KeycloakService.prototype.logout = function () {
        KeycloakService_1.auth.loggedIn = false;
        KeycloakService_1.auth.authz = null;
        window.location.href = KeycloakService_1.auth.logoutUrl;
    };
    KeycloakService.prototype.getToken = function () {
        return new Promise(function (resolve, reject) {
            if (KeycloakService_1.auth.authz.token) {
                KeycloakService_1.auth.authz.updateToken(5)
                    .success(function () {
                    resolve(KeycloakService_1.auth.authz.token);
                })
                    .error(function () {
                    reject('Failed to refresh token');
                });
            }
        });
    };
    return KeycloakService;
}());
KeycloakService.auth = {};
KeycloakService = KeycloakService_1 = __decorate([
    core_1.Injectable()
], KeycloakService);
exports.KeycloakService = KeycloakService;
var KeycloakService_1;
//# sourceMappingURL=keycloak.service.js.map