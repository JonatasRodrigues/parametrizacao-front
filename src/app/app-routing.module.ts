import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { CadastroParamComponent } from './parametros/cadastro-param.component';
import { ListaParamComponent } from './parametros/lista-param.component';
import { HomeComponent } from './home/home.component';
import { SincronizadorComponent } from './sincronizador/sincronizador.component';


const routes: Routes = [

  { path: '', component: TemplateComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'cadastrar', component: CadastroParamComponent },
    { path: 'listar', component: ListaParamComponent },
    { path: 'sincronizar', component: SincronizadorComponent }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
