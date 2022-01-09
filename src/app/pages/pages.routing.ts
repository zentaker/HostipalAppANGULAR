import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';



const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        canLoad: [AuthGuard], //verificar que la ruta se pueda cargar
        //para trabajar con el lazyload
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)  //importar ekl modulo demnaera peresosa
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


