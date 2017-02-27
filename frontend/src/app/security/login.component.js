"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var keycloak_service_1 = require("./keycloak.service");
var api_service_1 = require("./api.service");
var LoginComponent = (function () {
    function LoginComponent(_http, _kc, _api) {
        this._http = _http;
        this._kc = _kc;
        this._api = _api;
    }
    LoginComponent.prototype.logout = function () {
        this._kc.logout();
    };
    LoginComponent.prototype.reloadData = function () {
        var app = this;
        this._api.get("wordService/getBook").then(function (res) { return app.doSomething(res); }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.doSomething = function (res) {
        console.log(res);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n<div>\n    <button type=\"button\" (click)=\"logout()\">Sign Out</button>\n    <button type=\"button\" (click)=\"reloadData()\">Reload</button>\n</div>"
        }), 
        __metadata('design:paramtypes', [http_1.Http, keycloak_service_1.KeycloakService, api_service_1.ApiService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map