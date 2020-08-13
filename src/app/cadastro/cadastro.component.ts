import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/usuario';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  formUsuario: FormGroup

  

  constructor() { }

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
  setUser() {
    window.localStorage.setItem('userName',this.formUsuario.controls.user.value)
    window.localStorage.setItem('userPass',this.formUsuario.controls.senha.value)
  }
  getUser() {
    console.log(window.localStorage.getItem('userName'))
    console.log(window.localStorage.getItem('userPass'))
   
  }

}



    