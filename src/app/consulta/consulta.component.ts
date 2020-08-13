
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './consulta.service';
import { TabMenu } from 'primeng/tabmenu';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {

  produto
  

  constructor(private consulta: ConsultaService) {

  }
  ngOnInit(): void {
    this.consulta.listaProd()
      .then((prod) => {
        console.log(prod);
        this.produto = prod
      })



  }
}