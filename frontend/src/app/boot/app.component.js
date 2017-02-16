"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var AppComponent = (function () {
    function AppComponent(_kc, http) {
        this._kc = _kc;
        this.http = http;
        this.products = [];
    }
    AppComponent.prototype.logout = function () {
        this._kc.logout();
    };
    AppComponent.prototype.reloadData = function () {
        //angular dont have http interceptor yet
        var _this = this;
        this._kc.getToken().then(function (token) {
            var headers = new http_1.Headers({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            var options = new http_1.RequestOptions({ headers: headers });
            _this.http.get('http://localhost:41080/api/wordService/getBook', options)
                .subscribe(function (res) { return _this.doSomething(res); });
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.doSomething = function (res) {
        var a = 2;
    };
    AppComponent.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div id=\"content-area\" class=\"col-md-9\" role=\"main\">\n    <div id=\"content\">\n        <h1>Angular2 Product (Beta)</h1>\n        <h2><span>Products</span></h2>\n       \n        <button type=\"button\" (click)=\"logout()\">Sign Out</button>\n        <button type=\"button\" (click)=\"reloadData()\">Reload</button>\n        <table class=\"table\" [hidden]=\"!products.length\">\n            <thead>\n            <tr>\n                <th>Product Listing</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"#p of products\">\n                <td>{{p}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map