import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ogs = require('open-graph-scraper');
import ScraperError from './exceptions/Scraper.error';

@Injectable()
class ScrapService {
	private async extractOgData(url: string) {
		const ogData = await ogs({ url });
		if (ogData.error)
			throw new ScraperError(`Error occured while scraping ${url}`);
		return ogData.result;
	}

	async getOgData(url) {
		return await this.extractOgData(url);
	}
}

export default ScrapService;
