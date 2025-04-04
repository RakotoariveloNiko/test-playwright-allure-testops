import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private readonly validUser = { username: 'admin', password: 'admin' };

  login(username: string, password: string): boolean {
    return (
      username === this.validUser.username &&
      password === this.validUser.password
    );
  }
}
