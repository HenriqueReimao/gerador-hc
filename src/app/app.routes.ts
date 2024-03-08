import { Routes } from '@angular/router';
import {  HomeComponent } from './pages/home/home.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { SobreComponent } from './pages/sobre/sobre.component';



export const routes: Routes = [
    { path: 'home-component', component: HomeComponent},
    { path: 'contatos-component' , component: ContatosComponent},
    { path: 'sobre-component' , component: SobreComponent},

];
