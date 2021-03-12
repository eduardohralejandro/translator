import mongoose from 'mongoose';


export interface LinkI extends mongoose.Document {
    title:     string;
    linkText:  string;
}