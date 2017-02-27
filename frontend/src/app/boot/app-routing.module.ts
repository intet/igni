import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "../security/login.component";
import {WordComponent} from "../trainer/component/word.component";
import {WordTableComponent} from "../trainer/component/table/word.table.component";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'word', component: WordComponent},
    {path: 'table', component: WordTableComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}