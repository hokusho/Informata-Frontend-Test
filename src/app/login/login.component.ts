import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit  {
  
  formUsuario: FormGroup
  usuario: Usuario = new Usuario;

  login = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.creatForm(new Usuario());

  }

  creatForm(usuario: Usuario) {
    this.formUsuario = new FormGroup({
      nome: new FormControl(usuario.nome),
      sobrenome: new FormControl(usuario.sobrenome),
      user: new FormControl(usuario.user),
      senha: new FormControl(usuario.senha)
    })
  }
  onSubmit() {
    console.log(this.formUsuario.value);
    this.formUsuario.reset(new Usuario())
  }


  fazerLogin() {

    console.log(this.usuario)
    this.login = this.authService.fazerLogin(this.usuario)

    if (this.login) {
      this.router.navigate(['./home']);

    }
    console.log(this.login);
  }

  
  setUser() {
    window.localStorage.setItem('userName',this.formUsuario.controls.user.value)
    window.localStorage.setItem('userPass',this.formUsuario.controls.senha.value)
  }
  
  
  getUser() {

    console.log(window.localStorage.getItem('userName'))
    console.log(window.localStorage.getItem('userPass'))

  }
}

