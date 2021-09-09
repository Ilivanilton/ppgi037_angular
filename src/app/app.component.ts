import { Component } from '@angular/core';
import { AccountService } from './core/authentication/shared/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  namePorject = 'Front-end';
  autenticado = false;

  constructor(
    private accountService: AccountService
  ) {
    this.accountService.mostrarMenu.subscribe(
      next => this.autenticado = next
    )
   }

}
