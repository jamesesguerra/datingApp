import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get("https://localhost:5001/api/users")
      .subscribe({
        next: response => this.users = response,
        error: error => console.log(error)
      })
  }

  onRegistrationCancelled() {
    this.registerMode = false;
  }
}
