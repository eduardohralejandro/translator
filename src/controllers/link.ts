import { RequestHandler } from 'express';

import { LinkModel } from '../models/link';


/**
    find all links.
*/
export const findAllLinks: RequestHandler = async (request, response, next) => {
    try {
       const links = await LinkModel.find({});
       response.status(200).send(links);
    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    find link by id.
*/
export const findLinkById: RequestHandler = async (request, response, next) => {
    
    const _id = request.params.id;

    try {
        const task = await LinkModel.findOne({ _id });

        if (!task) {
            return response.status(404).send('no task found with that id');
        }

        response.send(task);

    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    post link
*/
export const postLink: RequestHandler = async (request, response, next) => {
    const link = new LinkModel(request.body);

    try {
        await link.save();
        response.status(200).send(link);
    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    update link
*/
export const updatLink: RequestHandler = async (request, response, next) => {
    const _id = request.params.id;

    try {

      const foundLink = await LinkModel.findOne({ _id });
   
      if (!foundLink) {
          throw new Error('This link does not exist');
      }

      const newUpdatedLink = request.body;
      const newLink = await LinkModel.findByIdAndUpdate(_id, newUpdatedLink);
    
      response.status(201).send(newLink);
    } catch (error) {
      response.status(500).send(error);
    }
}


/**
    delete link
*/
export const deleteLink: RequestHandler = async (request, response, next) => {
    try {
        const link = await LinkModel.findOneAndDelete({ _id: request.params.id });

        if (!link) {
            response.status(404).send('not link found');
        }

        response.send(link);

    } catch (e) {
        response.status(500).send();
    }
}


