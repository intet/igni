import {LoginComponent} from "../security/login.component";
import {WordComponent} from "../trainer/component/word.component";
import {WordTableComponent} from "../trainer/component/table/word.table.component";


export const router = {
  config: [
    {path: '/login', component: LoginComponent, name: 'Login', useAsDefault: true},
    {path: '/word', component: WordComponent, name: 'Word'},
    {path: '/table', component: WordTableComponent, name: 'Table'}
  ]
};
