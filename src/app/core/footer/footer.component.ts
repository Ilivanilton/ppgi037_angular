import { Component, OnInit } from '@angular/core';
import { AccountService } from '../authentication/shared/services/account.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.accountService.logout();
  }

}
