import { Inject, Injectable } from '@nestjs/common';
import CreateUrlReq from './dtos/CreateUrlReq.dto';
import ScrapService from './scrap.service';

@Injectable()
export class UrlService {
	constructor(@Inject(ScrapService) private scrapService: ScrapService) {}

	async saveUrl(dto: CreateUrlReq) {
		return await this.scrapService.getOgData(dto.url);
	}
}
