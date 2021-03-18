import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';


class Link {
    @prop({required: true})
    public title!: string;

    @prop({ required: true, trim: true })
    public linkText!: string;

    @prop({ required: true, default: Date.now() })
    public createdAt!: Date;

    @prop({ ref: () => 'UserModel', type: mongoose.Schema.Types.ObjectId })
    public owner!: mongoose.Schema.Types.ObjectId;
}


export const LinkModel = getModelForClass(Link);


