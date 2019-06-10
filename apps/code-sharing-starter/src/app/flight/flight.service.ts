import { Injectable } from '@nestjs/common';

import { UserService } from '@code-sharing-starter/api';

@Injectable()
export class FlightService {

  constructor(private userService: UserService) { }
}
