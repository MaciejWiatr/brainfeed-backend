import { Module } from '@nestjs/common';
import ScrapService from './scrap.service';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

@Module({
	controllers: [UrlController],
	providers: [ScrapService, UrlService],
})
export class UrlModule {}
