import { Controller, Get } from '@nestjs/common';

@Controller('api/test')
export class TestController {
  @Get()
  getTest() {
    return { message: 'Hello from NestJS 🎉'};
  }
}
