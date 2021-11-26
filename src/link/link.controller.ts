import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import CreateLinkReq from './dtos/CreateLinkReq.dto';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
	constructor(@Inject(LinkService) private urlService: LinkService) {}

	@Get('/')
	getUrl() {
		return 'hello from url controller';
	}

	@Post('/')
	async saveUrl(@Body() createUrlDto: CreateLinkReq) {
		return this.urlService.saveUrl(createUrlDto);
	}
}
