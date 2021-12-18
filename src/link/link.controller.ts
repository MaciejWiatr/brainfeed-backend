import {
	Body,
	Controller,
	Get,
	Headers,
	Inject,
	Param,
	Post,
} from '@nestjs/common';
import CreateLinkReq from './dtos/CreateLinkReq.dto';
import { LinkService } from './link.service';

@Controller('link')
export class LinkController {
	constructor(@Inject(LinkService) private urlService: LinkService) {}

	@Get('/:id')
	async getLinkById(@Param('id') id: string) {
		return this.urlService.getById(id);
	}

	@Get('/')
	async getAllLinks(@Headers('x-user-id') userId: string) {
		return this.urlService.getAll(userId);
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
