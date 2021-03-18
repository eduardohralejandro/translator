import validator from 'validator';
import bcrypt from 'bcrypt';
import { prop, getModelForClass, pre, ReturnModelType, modelOptions, Severity, Ref } from '@typegoose/typegoose';
import jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import { ObjectID } from 'mongodb';
import { LinkModel } from '../models/link';


@pre<User>('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})
@modelOptions({ options: {  allowMixed: Severity.ALLOW, } })
class User  {
    @prop({ trim: true })
    public name!: string;
  
    @prop({ unique: true, required: true, trim: true, validate: {
        validator: (value: string) => validator.isEmail(value), message: 'Email is  not invalid' }})
    public email!: string;

    @prop({ unique: true, required: true, trim: true})
    public password!: string;
    
    @prop()
    public tokens: Array<Object> = [];

    @prop({ required: true, default: Date.now() })
    public createdAt!: Date;

    public static async findByCredentials(this: ReturnModelType<typeof User>, email: string, password: string)  { 
   
    const model = this;
   
    const user = await model.findOne({ email });
   
        if (!user) {
            throw new Error('Unable to login');
        }
       
        const isMatch = await bcrypt.compare(password, user.password);
      
        if (!isMatch) {
            throw new Error('Unable to login');
        }
       
        return user;
      }

      public async toJSON() {
        const user = this;
        const userObject = (user as any).toObject();
        
        delete userObject.password
        delete userObject.tokens

        return userObject;
    }

      public async  generatedAuthToken() {

        const user = this;
       
        const token =  jwt.sign({ _id: (user as any)._id.toString() }, 'thisismyasecret');
        
        const _id = new ObjectID();
       
        user.tokens = user.tokens.concat({ _id, token });
      
        await (user as any).save();

        return token;
      }

    @prop({ 
        ref: () => 'LinkModel', type: mongoose.Schema.Types.ObjectId ,       
        foreignField: 'owner',
        localField: '_id' })
    public links!: Ref<typeof LinkModel>
   
}


export const UserModel = getModelForClass(User);