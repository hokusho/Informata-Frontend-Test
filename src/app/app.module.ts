import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService} from './login/auth.service';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './consulta/consulta.component';

//PrimeNg
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    HttpClientModule,
    TableModule



  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
