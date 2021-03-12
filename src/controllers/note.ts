import { RequestHandler } from 'express';

import { NoteModel } from '../models/note';


/**
    find all notes.
*/
export const findAllnotes: RequestHandler = async (request, response, next) => {
    try {
       const notes = await NoteModel.find({});
       response.status(200).send(notes);
    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    find note by id.
*/
export const findNoteById: RequestHandler = async (request, response, next) => {
    
    const _id = request.params.id;

    try {
        const note = await NoteModel.findOne({ _id });

        if (!note) {
            return response.status(404).send('no note found with that id');
        }

        response.send(note);

    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    post note
*/
export const postNote: RequestHandler = async (request, response, next) => {
    const note = new NoteModel(request.body);

    try {
        await note.save();
        response.status(200).send(note);
    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    update note
*/
export const updatNote: RequestHandler = async (request, response, next) => {
    const _id = request.params.id;

    try {

      const foundNote = await NoteModel.findOne({ _id });
   
      if (!foundNote) {
          throw new Error('This note does not exist');
      }

      const newUpdatedNote = request.body;
      const newNote = await NoteModel.findByIdAndUpdate(_id, newUpdatedNote);
    
      response.status(201).send(newNote);
    } catch (error) {
      response.status(500).send(error);
    }
}


/**
    delete note
*/
export const deleteNote: RequestHandler = async (request, response, next) => {
    try {
        const note = await NoteModel.findOneAndDelete({ _id: request.params.id });

        if (!note) {
            response.status(404).send('not note found');
        }

        response.send(note);

    } catch (error) {
        response.status(500).send(error);
    }
}


