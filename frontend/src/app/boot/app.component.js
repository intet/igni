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
require("rxjs/add/operator/map");
var keycloak_service_1 = require("../security/keycloak.service");
var api_service_1 = require("../security/api.service");
var AppComponent = (function () {
    function AppComponent(http, kc, api) {
        this.http = http;
        this.kc = kc;
        this.api = api;
        this.products = [];
    }
    AppComponent.prototype.logout = function () {
        this.kc.logout();
    };
    AppComponent.prototype.reloadData = function () {
        var _this = this;
        this.api.get('wordService/getWords')
            .map(function (res) { return res.json(); })
            .subscribe(function (prods) { return _this.products = prods; }, function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div id=\"content-area\" class=\"col-md-9\" role=\"main\">\n      <div id=\"content\">\n        <h1>Angular2 Product (Beta)</h1>\n        <h2><span>Products</span></h2>\n        <button type=\"button\" (click)=\"logout()\">Sign Out</button>\n        <button type=\"button\" (click)=\"reloadData()\">Reload</button>\n        <table class=\"table\" [hidden]=\"!products.length\">\n          <thead>\n          <tr>\n            <th>Product Listing</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let p of products\">\n            <td>{{p}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [http_1.Http, keycloak_service_1.KeycloakService, api_service_1.ApiService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map