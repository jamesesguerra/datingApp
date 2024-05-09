import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild("registerForm") registerForm!: NgForm;
  @Output() registrationCancelled = new EventEmitter();

  constructor(private accountService: AccountService) {}

  register() {
    this.accountService.register(this.registerForm.value)
      .subscribe({
        next: () => {
          this.cancel();
        },
        error: error => console.log(error)
      })
  }

  cancel() {
    this.registrationCancelled.emit();
  }
}
