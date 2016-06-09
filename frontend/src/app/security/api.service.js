import {Injectable} from "angular2/core"
import {Http, Headers, Response, RequestOptions} from "angular2/http";
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
        let kc = this._kc;
        let http = this._http;
        return new Promise(function (resolve, reject) {
            kc.getToken().then(
                token=> {
                    let headers = new Headers({
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token
                    });

                    let options = new RequestOptions({headers: headers});

                    http.get('api/' + url, options)
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