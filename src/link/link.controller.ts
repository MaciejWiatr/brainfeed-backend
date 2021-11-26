import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import CreateLinkReq from './dtos/CreateLinkReq.dto';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
	constructor(@Inject(LinkService) private urlService: LinkService) {}

	@Get('/')
	getUrl() {
		return 'hello from url controller';
	}

	@Get("/:id")
	async getLinkById(@Param("id") id:string){
		return this.urlService.getById(id);
	}

	@Post('/')
	async saveUrl(@Body() createUrlDto: CreateLinkReq) {
		return this.urlService.create(createUrlDto);
	}
}
