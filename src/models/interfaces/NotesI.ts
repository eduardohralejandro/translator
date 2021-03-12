import mongoose from 'mongoose';


export interface NotesI extends mongoose.Document {
    noteString:     string;
    language:       string;
}