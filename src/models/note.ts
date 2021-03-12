import { prop, getModelForClass } from '@typegoose/typegoose';


class Note {
    @prop({required: true})
    public noteString!: string;

    @prop({ required: true, trim: true })
    public language!: string;

    @prop({ required: true, default: Date.now() })
    public createdAt!: Date;
}


export const NoteModel = getModelForClass(Note);
