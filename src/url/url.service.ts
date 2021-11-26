import { Injectable } from '@nestjs/common';
import ogs from 'open-graph-scraper';

@Injectable()
export class UrlService {
  private async scrapOgData(url: string) {
    const ogData = await ogs({ url });
    return ogData.result;
  }
}
