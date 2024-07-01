import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  addUser(user: any) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUser(email: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((user: any) => user.email === email);
  }
}
