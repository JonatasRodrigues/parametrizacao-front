import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListaParamComponent } from './parametros/lista-param.component';
import { HomeComponent } from './home/home.component';
import { SincronizadorComponent } from './sincronizador/sincronizador.component';
import { CadastroParamComponent } from './parametros/cadastro-param.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,   
    TemplateComponent,
    MenuComponent,
    FooterComponent,
    CadastroParamComponent,
    ListaParamComponent,
    HomeComponent,
    SincronizadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot() ,
    FormsModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    ReactiveFormsModule,
    AppRoutingModule,  
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
