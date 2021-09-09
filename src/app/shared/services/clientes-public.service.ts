import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/modules/clientes/shared/clientes.model';

import { ClientesService } from 'src/app/modules/clientes/shared/clientes.service';

@Injectable()
export class ClientesPublicService {

  constructor(
    public http: HttpClient,
    public clientesService: ClientesService,
  ) {  }

  getClientes(): Observable<Cliente[]>{
    return this.clientesService.getClientes()
  }

}
