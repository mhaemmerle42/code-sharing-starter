import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { mockUsers } from '../../../../../mock-data/users';
import { AbstractUserService, User } from '@code-sharing-starter/shared';

@Injectable()
export class UserService implements AbstractUserService {

  getUsers(): Observable<User[]> {
    return of(mockUsers);
  }

  getUserByUsername(username: string): Observable<User> {
    return of(mockUsers).pipe(
      map(users => users.find(user => user.username === username))
    );
  }
}
