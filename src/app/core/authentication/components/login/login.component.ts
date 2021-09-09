import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Usuario = new Usuario()
  falha=false;
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  onSugmit(f){

    this.accountService.fazerLogin(this.login).subscribe(
      next => {
        if (!next) this.falha = true
        this.login = new Usuario()
      }
    )
  }

}
