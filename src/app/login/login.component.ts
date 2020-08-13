import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario;

  login = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
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
    window.localStorage.setItem('userName', this.usuario.user);
    window.localStorage.setItem('userPass', this.usuario.senha);
    this.usuario.user = '';
    this.usuario.senha = '';

  }
  getUser() {

    console.log(window.localStorage.getItem('userName'))
    console.log(window.localStorage.getItem('userPass'))

  }
}
