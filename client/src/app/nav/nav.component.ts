import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { AccountService } from '../services/account.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild("loginForm") loginForm!: NgForm;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.loginForm.value)
      .subscribe({
        error: error => console.log(error)
      });
  }

  logout() {
    this.accountService.logout();
  }
}
