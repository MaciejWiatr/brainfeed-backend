import { Module } from '@nestjs/common';
import ScrapService from './scrap.service';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';

@Module({
	controllers: [LinkController],
	providers: [ScrapService, LinkService],
})
export class LinkModule {}
