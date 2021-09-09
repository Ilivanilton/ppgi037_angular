import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from "../models/usuario.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  usuarioAutenticado = false;
  mostrarMenu = new EventEmitter<boolean>()

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario): Observable<boolean>{
    if (usuario.email == '1' && usuario.password == '1') {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true)
      this.router.navigate(['/dashboard'])
    } else {
      this.mostrarMenu.emit(false)
      this.router.navigate(['/'])
    }
    return new Observable( o => {
      o.next(this.usuarioAutenticado);
      o.complete();
    })
  }

  logout(){
    this.usuarioAutenticado = false;
    this.mostrarMenu.emit(false)
    this.router.navigate(['/'])
  }

}
