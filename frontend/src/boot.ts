import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {KeycloakService} from './app/security/keycloak.service';
import {AppModule} from './app/boot/app.module';
KeycloakService.init().then(
    o=>{
        const platform = platformBrowserDynamic();
        platform.bootstrapModule(AppModule);
    },
    x=>{
        window.location.reload();
    }
);