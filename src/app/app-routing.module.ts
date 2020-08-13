import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './consulta/consulta.component';



const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' }, 
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'consulta', component: ConsultaComponent},
  {path:'cadastro', component: CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
