import mongoose from 'mongoose';


const linkSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    linkText: {
        type: String,
    }
});


export const Link = mongoose.model('Link', linkSchema);


