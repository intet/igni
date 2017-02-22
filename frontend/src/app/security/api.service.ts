import {Injectable} from "@angular/core"
import {Http, Response, RequestOptions, RequestOptionsArgs, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiService {
    constructor(private _http:Http) {}

    get( url: string, options?: RequestOptionsArgs):Observable<Response> {
        return this._http.get('api/' + url, options);
    }

    post(url: string, body: any, options?: RequestOptionsArgs):Observable<Response> {
        return this._http.post('api/' + url, body, options);
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