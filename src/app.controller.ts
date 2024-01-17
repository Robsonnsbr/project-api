import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiInfo } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApi(): ApiInfo {
    return this.appService.getApi();
  }
}
