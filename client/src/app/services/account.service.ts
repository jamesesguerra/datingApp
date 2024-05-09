import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  baseUrl = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  login(model: { username: string, password: string }) {
    return this.http.post<User>(`${this.baseUrl}/account/login`, model)
      .pipe(map((user: User) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      }))
  }

  register(model: { username: string, password: string }) {
    return this.http.post<User>(`${this.baseUrl}/account/register`, model)
      .pipe(map((user: User) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      }))
  }

  logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
}
