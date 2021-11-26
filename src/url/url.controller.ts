import { Controller, Get } from '@nestjs/common';

@Controller('url')
export class UrlController {
  @Get('/')
  getUrl() {
    return 'hello from url controller';
  }
}
