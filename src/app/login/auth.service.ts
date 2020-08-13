import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';


@Injectable()

export class AuthService {

  constructor() { }
  
  fazerLogin(usuario: Usuario){

    if (usuario.user === window.localStorage.getItem('userName') &&
    usuario.senha === window.localStorage.getItem('userPass')){
      return true
    }
    else{
      return false;
      
    }
  }
}
