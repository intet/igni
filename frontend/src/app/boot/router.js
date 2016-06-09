import {LoginComponent} from "../security/login.component";
import {WordComponent} from "../trainer/component/word.component";


export const router = {
  config: [
    {path: '/login', component: LoginComponent, name: 'Login', useAsDefault: true},
    {path: '/word', component: WordComponent, name: 'Word'}
  ]
};
