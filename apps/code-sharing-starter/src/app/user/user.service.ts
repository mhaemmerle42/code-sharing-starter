import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AbstractUserService, User } from '@code-sharing-starter/shared';

@Injectable({
  providedIn: 'root'
})
export class UserService implements AbstractUserService {

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`api/user/${username}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  }
}
