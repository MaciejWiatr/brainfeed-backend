import { Inject, Injectable } from '@nestjs/common';
import CreateLinkReq from './dtos/CreateLinkReq.dto';
import ScrapService from './scrap.service';

@Injectable()
export class LinkService {
	constructor(@Inject(ScrapService) private scrapService: ScrapService) {}

	async saveUrl(dto: CreateLinkReq) {
		return await this.scrapService.getOgData(dto.url);
	}
}
