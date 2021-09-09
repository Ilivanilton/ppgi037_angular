import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../shared/clientes.model';
import { ClientesService } from '../../shared/clientes.service';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.getClientes()
  }

  getClientes(){
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes['pacientes']);
  }

}
