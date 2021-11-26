import { Injectable } from '@nestjs/common';
import run, { OpenGraphImage, OpenGraphProperties } from 'open-graph-scraper';
// import ogs from 'open-graph-scraper';
import ScraperError from './exceptions/Scraper.error';
import * as UrlParser from "url-parse";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ogs = require('open-graph-scraper');

type ogsResult = run.SuccessResult | run.ErrorResult;

@Injectable()
class ScrapService {
	private static extractHostname(linkUrl:string){
		const domain = new UrlParser(linkUrl);
		return domain.hostname;
	}

	private static async extractOgData(url: string) {
		const ogData: ogsResult = await ogs({ url });

		if (ogData.error)
			throw new ScraperError(`Error occured while scraping ${url}`);
		return ogData.result;
	}

	async getOgData(url) {
		const data = (await ScrapService.extractOgData(url)) as OpenGraphProperties;
		const image = data.ogImage as unknown as OpenGraphImage;
		return {
			url: data.ogUrl || url,
			title: data.ogTitle || url,
			description: data.ogDescription ? data.ogDescription : "",
			siteName: data.ogSiteName ? data.ogSiteName : ScrapService.extractHostname(url),
			imageUrl: image?.url ? image.url : "",
		};
	}
}

export default ScrapService;
