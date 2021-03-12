import { prop, getModelForClass } from '@typegoose/typegoose';


class Link {
    @prop({required: true})
    public title!: string;

    @prop({ required: true, trim: true })
    public linkText!: string;

    @prop({ required: true, default: Date.now() })
    public createdAt!: Date;
}


export const LinkModel = getModelForClass(Link);

