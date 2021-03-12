import mongoose from 'mongoose';


export interface IUser extends mongoose.Document {
    _id:       string;
    email:     string;
    name:      string;
    password:  string;
}