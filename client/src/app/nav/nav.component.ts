import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild("loginForm") loginForm!: NgForm;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.loginForm.value)
      .subscribe({
        next: () => this.router.navigateByUrl("/members"),
      });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}
