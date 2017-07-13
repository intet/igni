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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.get = function (url, options) {
        var http = this.http;
        return new Promise(function (resolve, reject) {
            http.get('api/' + url, options).subscribe(function (res) { resolve(res); });
        });
    };
    ApiService.prototype.post = function (url, params) {
        var body = JSON.stringify(params);
        var http = this.http;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            http.post('api/' + url, body, options).subscribe(function (res) { resolve(res); });
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
/*
*  for (var key in params){
 if(params.hasOwnProperty(key)){
 let value = params[key];
 let param = encodeURI(JSON.stringify(value));
 searchParams.set(key,param);
 }
 }

 let headers = new Headers({
 'Accept': 'application/json',
 'Authorization': 'Bearer ' + token,
 'Content-type': 'application/json'
 });

 let options = new RequestOptions({
 headers: headers,
 method: method,
 search: searchParams
 });

 http.post('api/' + url,null, options)
 .subscribe((res:Response) => {
 resolve(res);
 });*/ 
//# sourceMappingURL=api.service.js.map