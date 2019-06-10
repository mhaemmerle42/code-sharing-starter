import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserService } from './user.service';

@Component({
  selector: 'code-sharing-starter-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  getUserSubject = new Subject<void>();
  users$ = this.getUserSubject.pipe(
    switchMap(() => this.userService.getUsers())
  );

  constructor(private userService: UserService) {
  }

  resolveUsers(): void {
    this.getUserSubject.next();
  }

}
