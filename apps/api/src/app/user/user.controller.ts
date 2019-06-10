import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { User } from '@code-sharing-starter/shared';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get()
  getUsers(): Observable<User[]> {
    return this.userService.getUsers();
  }
}
