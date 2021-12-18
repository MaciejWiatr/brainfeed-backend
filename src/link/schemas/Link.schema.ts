import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LinkDocument = Link & Document;

@Schema()
export class Link {
	@Prop({ required: true })
	url: string;

	@Prop({ required: true })
	title: string;

	@Prop({ required: true })
	description: string;

	@Prop({ required: true })
	siteName: string;

	@Prop()
	imageUrl: string;

	@Prop({ default: false })
	read: boolean;

	@Prop({ default: false })
	archived: boolean;

	@Prop({ default: Date.now })
	createdAt: Date;

	@Prop({ required: true })
	userId: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
