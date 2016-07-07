import {Injectable} from "angular2/core"
import {Http, Headers, Response, RequestOptions, RequestMethod} from "angular2/http";
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
        this.sendRequest(url,RequestMethod.Get);
    }

    post(url:String):Promise {
        this.sendRequest(url,RequestMethod.Post);
    }
    sendRequest(url:String, method:RequestMethod, params):Promise {
        let kc = this._kc;
        let http = this._http;
        return new Promise(function (resolve, reject) {
            kc.getToken().then(
                token=> {
                    let headers = new Headers({
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token
                    });

                    let options = new RequestOptions({headers: headers,
                        method:method});

                    http.post('api/' + url, options)
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