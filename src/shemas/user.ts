// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument, deleteModel } from 'mongoose';
//
// export type UserDocument = HydratedDocument<User>;
//
// @Schema()
// export class User {
//   @Prop()
//   name: string;
//
//   @Prop()
//   age: number;
// }
//
// export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IUser } from '../interfaces/user';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {
  @Prop() psw: string;

  @Prop() cardNumber: string;

  @Prop() login: string;

  @Prop() email: string;

  @Prop() id: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
