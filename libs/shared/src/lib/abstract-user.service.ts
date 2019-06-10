import { Observable } from 'rxjs';

import { User } from './interfaces';

export abstract class AbstractUserService {

  abstract getUsers(): Observable<User[]>;
  abstract getUserByUsername(username: string): Observable<User>;
}
