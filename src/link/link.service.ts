import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateLinkReq from './dtos/CreateLinkReq.dto';
import { Link, LinkDocument } from './schemas/Link.schema';
import ScrapService from './scrap.service';

@Injectable()
export class LinkService {
	constructor(
		@Inject(ScrapService) private scrapService: ScrapService,
		@InjectModel(Link.name) private linkModel: Model<LinkDocument>,
	) {}

	async getById(id: string) {
		try {
			return await this.linkModel.findById(id);
		} catch (e) {
			throw new HttpException('Not found', HttpStatus.NOT_FOUND);
		}
	}

	async create(dto: CreateLinkReq) {
		const existingLink = await this.linkModel.findOne({ url: dto.url });
		if (existingLink) return existingLink;
		const data = await this.scrapService.getOgData(dto.url);
		const createdLink = new this.linkModel(data);
		return createdLink.save();
	}

	async toggleRead(id: string) {
		let link;
		try {
			link = await this.linkModel.findById(id);
		} catch (e) {
			throw new HttpException('Not found', HttpStatus.NOT_FOUND);
		}
		link.read = !link.read;
		return await link.save();
	}

	async archive(id: string) {
		try {
			return await this.linkModel.findByIdAndUpdate(id, {
				$set: {
					archived: true,
				},
			});
		} catch (e) {
			throw new HttpException('Not found', HttpStatus.NOT_FOUND);
		}
	}
}
