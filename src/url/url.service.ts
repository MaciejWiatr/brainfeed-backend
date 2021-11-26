import { Inject, Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ogs = require('open-graph-scraper');
import CreateUrlReq from './dtos/CreateUrlReq.dto';
import ScrapService from './scrap.service';

@Injectable()
export class UrlService {
	constructor(@Inject(ScrapService) private scrapService: ScrapService) {}

	async saveUrl(dto: CreateUrlReq) {
		return await this.scrapService.getOgData(dto.url);
	}
}
