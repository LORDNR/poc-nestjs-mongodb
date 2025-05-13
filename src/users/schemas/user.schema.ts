import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ type: String, required: false, default: null })
  name: string | null;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Number, required: false, default: null })
  age: number | null;
}

export const UserSchema = SchemaFactory.createForClass(User);

