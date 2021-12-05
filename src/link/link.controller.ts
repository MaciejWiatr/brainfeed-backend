import {
	Body,
	CacheInterceptor,
	Controller,
	Get,
	Inject,
	Param,
	Post,
	UseInterceptors,
} from '@nestjs/common';
import CreateLinkReq from './dtos/CreateLinkReq.dto';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
	constructor(@Inject(LinkService) private urlService: LinkService) {}

	@UseInterceptors(CacheInterceptor)
	@Get('/:id')
	async getLinkById(@Param('id') id: string) {
		return this.urlService.getById(id);
	}

	@Post('/')
	async saveUrl(@Body() createUrlDto: CreateLinkReq) {
		return this.urlService.create(createUrlDto);
	}

	@Post('/:id/read')
	async markLinkAsRead(@Param('id') id: string) {
		return this.urlService.toggleRead(id);
	}

	@Post('/:id/archive')
	async archiveLink(@Param('id') id: string) {
		return this.urlService.archive(id);
	}
}
