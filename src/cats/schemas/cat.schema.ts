import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '../../users/schemas/user.schema';


export type CatDocument = HydratedDocument<Cat>;
@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Number, required: false, default: null })
  age: number | null;

  @Prop({ type: String, required: false, default: null })
  breed: string | null;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null })
  user_id: mongoose.Types.ObjectId | null;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

