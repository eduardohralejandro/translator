import { RequestHandler } from 'express';

import { UserModel } from '../models/user';


/**
    find all users.
*/
export const findAllUsers: RequestHandler = async (request, response, next) => {
    try {
       const users = await UserModel.find({});
       response.status(200).send(users);
    } catch (error) {
        response.status(500).send(error);
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
export const creatUser: RequestHandler = async (request, response, next) => {
    const user = new UserModel(request.body);

    try {
        await user.save();
        response.status(200).send(user);
    } catch (error) {
        response.status(500).send(error);
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


