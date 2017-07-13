import {Injectable} from "@angular/core"
import {Http, Response, RequestOptions, RequestOptionsArgs, URLSearchParams, Headers} from "@angular/http";

@Injectable()
export class ApiService {
    constructor(private http:Http) {}

    get( url: string, options?: RequestOptionsArgs):Promise<Response>  {
        let http = this.http;
        return new Promise(function (resolve, reject) {
            http.get('api/' + url, options).subscribe((res:Response) => {resolve(res)});
        });
    }

    post(url: string, params?: any):Promise<Response> {
        let body = JSON.stringify(params);
        let http = this.http;
        let headers = new Headers();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        let options = new RequestOptions({ headers: headers });
        return new Promise(function (resolve, reject) {
            http.post('api/' + url, body, options).subscribe((res:Response) => {resolve(res)});
        });
    }
}


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