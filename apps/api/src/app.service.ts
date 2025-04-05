import { Injectable } from '@nestjs/common';
import { add } from '@repo/math/add';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + add(1, 2);
  }
}
