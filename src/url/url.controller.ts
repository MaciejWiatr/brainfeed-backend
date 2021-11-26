import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import CreateUrlReq from './dtos/CreateUrlReq.dto';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(@Inject(UrlService) private urlService: UrlService) {}

  @Get('/')
  getUrl() {
    return 'hello from url controller';
  }

  @Post('/')
  async saveUrl(@Body() createUrlDto: CreateUrlReq) {
    return this.urlService.saveUrl(createUrlDto);
  }
}
