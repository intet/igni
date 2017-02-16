import {Injectable} from '@angular/core';

@Injectable()
export class KeycloakService {

    static auth = {};

    static init() : Promise{
        let keycloakAuth = new Keycloak('keycloak.json');
        KeycloakService.auth.loggedIn = false;
        return new Promise((resolve,reject)=>{
            keycloakAuth.init({ onLoad: 'login-required' })
                .success( () => {
                    KeycloakService.auth.loggedIn = true;
                    KeycloakService.auth.authz = keycloakAuth;
                    KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl +
                        "/realms/igniRealm/protocol/openid-connect/logout?redirect_uri=" +
                        window.location.href ;
                    resolve(null);
                })
                .error(()=> {
                    reject(null);
                });
        });
    }

    logout(){
        console.log('*** LOGOUT');
        KeycloakService.auth.loggedIn = false;
        KeycloakService.auth.authz = null;

        window.location.href = KeycloakService.auth.logoutUrl;
    }

    getToken(): Promise{
        return new Promise((resolve,reject)=>{
            if (KeycloakService.auth.authz.token) {
                KeycloakService.auth.authz.updateToken(5).success(function() {
                    resolve(KeycloakService.auth.authz.token);
                })
                .error(function() {
                    reject('Failed to refresh token');
                });
            }
        });
    }
}
