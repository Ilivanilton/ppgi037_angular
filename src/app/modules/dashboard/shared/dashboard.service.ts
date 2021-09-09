import { Injectable, Optional } from '@angular/core';

import { Observable } from 'rxjs';

import { ClientesPublicService } from '../../../shared/services/clientes-public.service';
import { Cliente } from '../../clientes/shared/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
	  private clientesPublicService: ClientesPublicService) { }

  getClientes(): Observable<Cliente[]>{
    return this.clientesPublicService.getClientes()
  }

}
