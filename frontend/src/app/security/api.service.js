import {Injectable} from "angular2/core"
import {Http, Headers, Response, RequestOptions, RequestMethod, URLSearchParams} from "angular2/http";
import {KeycloakService} from "../security/keycloak";

@Injectable()
export class ApiService {
    static get parameters() {
        return [[Http], [KeycloakService]];
    }

    constructor(http:Http, kc:KeycloakService) {
        this._http = http;
        this._kc = kc;
    }

    get(url:String):Promise {
        return this.sendRequest(url, RequestMethod.Get);
    }

    post(url:String, params:Object):Promise {
        return this.sendRequest(url, RequestMethod.Post, params);
    }

    sendRequest(url:String, method:RequestMethod, params:Object):Promise {
        let kc = this._kc;
        let http = this._http;
        return new Promise(function (resolve, reject) {
            kc.getToken().then(
                token=> {
                    let searchParams:URLSearchParams = new URLSearchParams();
                    for (var key in params){
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
                        });

                },
                error=> {
                    reject(error);
                }
            );
        });
    }
}
