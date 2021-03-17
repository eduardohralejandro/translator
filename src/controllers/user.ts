import { RequestHandler } from 'express';

import { UserModel } from '../models/user';


/**
    find user profile.
*/
export const findAllUsers: RequestHandler = async (request, response, next) => {
    response.send((request as any).user);
}


/**
    logout user
*/
export const logoutUser: RequestHandler = async (request, response, next) => {
  try {
      (request as any).user.tokens = (request as any).user.tokens.filter((token: any) => {
        return token.token !== (request as any).token
      })

      (request as any).user.save();
      response.send();
  } catch (error) {
      response.status(500).send();
  }
}

/**
    find user by id.
*/
export const findUserById: RequestHandler = async (request, response, next) => {
    
    const _id = request.params.id;

    try {
        const user = await UserModel.findOne({ _id });

        if (!user) {
            return response.status(404).send('no user found with that');
        }

        response.send(user);

    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    create/signup user
*/
export const createUser: RequestHandler = async (request, response, next) => {
    try {
        const user = new UserModel(request.body);
        const token = await user.generatedAuthToken();
        
        await user.save();
       
        const info = await user.toJSON();
        response.status(201).send({user: info, token});
        
    } catch (error) {
        response.status(500).send(error);
    }
}

/**
    login user
*/
export const loginUser: RequestHandler = async (request, response, next) => {
  
    try {
        const user = await UserModel.findByCredentials(request.body.email, request.body.password);
        const token = await user.generatedAuthToken();  
        const info = await user.toJSON();      

        response.status(200).send({ user: info, token});
        
    } catch (error) {
        response.status(400).send(error);
    }
}

/**
    delete  unsuscribe user
*/
export const deleteUser: RequestHandler = async (request, response, next) => {
    try {
        const user = await UserModel.findOneAndDelete({ _id: request.params.id });

        if (!user) {
            response.status(404).send('not user found');
        }

        response.send(user);

    } catch (e) {
        response.status(500).send();
    }
}


