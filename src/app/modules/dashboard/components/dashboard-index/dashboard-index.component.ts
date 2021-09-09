import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../shared/dashboard.service';
import { Cliente } from 'src/app/modules/clientes/shared/clientes.model';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class IndexComponent implements OnInit {

  clientes: Cliente[];
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
	this.getClientes();
  }

  getClientes(){
    this.dashboardService.getClientes()
      .subscribe(clientes => this.clientes = clientes['pacientes'].slice(1,5))
  }



}
