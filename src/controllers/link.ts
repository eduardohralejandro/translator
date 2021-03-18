import { RequestHandler } from 'express';

import { LinkModel } from '../models/link';


/**
    find all links.
*/
export const findAllLinks: RequestHandler = async (request, response, next) => {
    try {
       await (request as any).user?.populate({ path: 'links', model: LinkModel }).execPopulate();
       response.status(200).send((request as any).user.links);

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
 
        const link = await LinkModel.findOne({_id, owner: (request as any).user._id });

        if (!link) {
            return response.status(404).send();
        }

        response.send(link);

    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    post link
*/
export const postLink: RequestHandler = async (request, response, next) => {
  
    const link =  new LinkModel({
        ...request.body,
        owner: (request as any).user._id
    });

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

      const foundLink = await LinkModel.findById({ _id, owner: (request as any).user._id});

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
        const link = await LinkModel.findOneAndDelete({ _id: request.params.id, owner: (request as any).user._id });

        if (!link) {
            response.status(404).send('not link found');
        }

        response.send(link);

    } catch (e) {
        response.status(500).send();
    }
}


