import { Test, TestingModule } from '@nestjs/testing';
import { LinkController } from './link.controller';

describe('UrlController', () => {
	let controller: LinkController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [LinkController],
		}).compile();

		controller = module.get<LinkController>(LinkController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
