import { CacheModule, Module } from '@nestjs/common';
import ScrapService from './scrap.service';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './schemas/Link.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Link.name,
				schema: LinkSchema,
			},
		]),
		CacheModule.register({
			ttl: 10,
			max: 10,
		}),
	],
	controllers: [LinkController],
	providers: [ScrapService, LinkService],
})
export class LinkModule {}
