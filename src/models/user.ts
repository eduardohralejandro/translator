import validator from 'validator';
import { prop, getModelForClass } from '@typegoose/typegoose';


class User {
    @prop({required: true, trim: true})
    public name!: string;
  
    @prop({ unique: true, required: true, trim: true, validate: {
        validator: (value: string) => !validator.isEmail(value), message: 'Email is  not invalid' }})
    public email!: string;

    @prop({ unique: true, required: true, trim: true,  validate: {
        validator: (value: string) =>  value.toLowerCase().includes('password'), message: 'Password cannot contain "password"'}})
    public password!: string;

    @prop({ required: true, default: Date.now() })
    public createdAt!: Date;
}


export const UserModel = getModelForClass(User);


