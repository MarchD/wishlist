import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  id: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  birthday: Date;
  @Prop()
  description: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
