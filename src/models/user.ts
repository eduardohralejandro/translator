import validator from 'validator';
import bcrypt from 'bcrypt';
import { prop, getModelForClass, pre, ReturnModelType } from '@typegoose/typegoose';



@pre<User>('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})
class User  {
    @prop({required: true, trim: true})
    public name!: string;
  
    @prop({ unique: true, required: true, trim: true, validate: {
        validator: (value: string) => validator.isEmail(value), message: 'Email is  not invalid' }})
    public email!: string;

    @prop({ unique: true, required: true, trim: true})
    public password!: string;

    @prop({ required: true, default: Date.now() })
    public createdAt!: Date;

    public static async findByCredentials(this: ReturnModelType<typeof User>, email: string, password: string)  { 
   
    const model = this;
   
    const user = await model.findOne({ email })
   
        if (!user) {
            throw new Error('Unable to login');
        }
       
        const isMatch = await bcrypt.compare(password, user.password);
      
        if (!isMatch) {
            throw new Error('Unable to login');
        }
       
        return user;
      }
}


export const UserModel = getModelForClass(User);