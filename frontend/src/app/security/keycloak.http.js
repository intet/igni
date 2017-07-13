"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var keycloak_service_1 = require("./keycloak.service");
var Rx_1 = require("rxjs/Rx");
/**
 * This provides a wrapper over the ng2 Http class that insures tokens are refreshed on each request.
 */
var KeycloakHttp = (function (_super) {
    __extends(KeycloakHttp, _super);
    function KeycloakHttp(_backend, _defaultOptions, _keycloakService) {
        var _this = _super.call(this, _backend, _defaultOptions) || this;
        _this._keycloakService = _keycloakService;
        return _this;
    }
    KeycloakHttp.prototype.setToken = function (options) {
        if (options == null || keycloak_service_1.KeycloakService.auth == null || keycloak_service_1.KeycloakService.auth.authz == null || keycloak_service_1.KeycloakService.auth.authz.token == null) {
            console.log("Need a token, but no token is available, not setting bearer token.");
            return;
        }
        options.headers.set('Authorization', 'Bearer ' + keycloak_service_1.KeycloakService.auth.authz.token);
    };
    KeycloakHttp.prototype.configureRequest = function (f, url, options, body) {
        var _this = this;
        var tokenPromise = this._keycloakService.getToken();
        var tokenObservable = Rx_1.Observable.fromPromise(tokenPromise);
        var tokenUpdateObservable = Rx_1.Observable.create(function (observer) {
            if (options == null) {
                var headers = new http_1.Headers();
                options = new http_1.RequestOptions({ headers: headers });
            }
            else if (options.headers == null) {
                options.headers = new http_1.Headers();
            }
            _this.setToken(options);
            observer.next();
            observer.complete();
        });
        var requestObservable = Rx_1.Observable.create(function (observer) {
            var result;
            if (body) {
                result = f.apply(_this, [url, body, options]);
            }
            else {
                result = f.apply(_this, [url, options]);
            }
            result.subscribe(function (response) {
                observer.next(response);
                observer.complete();
            }, function (err) { return observer.error(err); });
        });
        return Rx_1.Observable
            .merge(tokenObservable, tokenUpdateObservable, requestObservable, 1) // Insure no concurrency in the merged Observables
            .filter(function (response) { return response instanceof http_1.Response; });
    };
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    KeycloakHttp.prototype.request = function (url, options) {
        return this.configureRequest(_super.prototype.request, url, options);
    };
    /**
     * Performs a request with `get` http method.
     */
    KeycloakHttp.prototype.get = function (url, options) {
        return this.configureRequest(_super.prototype.get, url, options);
    };
    /**
     * Performs a request with `post` http method.
     */
    KeycloakHttp.prototype.post = function (url, body, options) {
        return this.configureRequest(_super.prototype.post, url, options, body);
    };
    /**
     * Performs a request with `put` http method.
     */
    KeycloakHttp.prototype.put = function (url, body, options) {
        return this.configureRequest(_super.prototype.put, url, options, body);
    };
    /**
     * Performs a request with `delete` http method.
     */
    KeycloakHttp.prototype.delete = function (url, options) {
        return this.configureRequest(_super.prototype.delete, url, options);
    };
    /**
     * Performs a request with `patch` http method.
     */
    KeycloakHttp.prototype.patch = function (url, body, options) {
        return this.configureRequest(_super.prototype.patch, url, options, body);
    };
    /**
     * Performs a request with `head` http method.
     */
    KeycloakHttp.prototype.head = function (url, options) {
        return this.configureRequest(_super.prototype.head, url, options);
    };
    /**
     * Performs a request with `options` http method.
     */
    KeycloakHttp.prototype.options = function (url, options) {
        return this.configureRequest(_super.prototype.options, url, options);
    };
    return KeycloakHttp;
}(http_1.Http));
KeycloakHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.ConnectionBackend, http_1.RequestOptions, keycloak_service_1.KeycloakService])
], KeycloakHttp);
exports.KeycloakHttp = KeycloakHttp;
//# sourceMappingURL=keycloak.http.js.map