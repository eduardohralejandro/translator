import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user';
import { Response, NextFunction } from 'express';


async function auth(request: any , response: Response, next: NextFunction) { 
    try {

        const token = request.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisismyasecret') as any;
    
        const user = await UserModel.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }
        request.token = token;
        request.user = user;

        next();
    } catch (error) {
        response.status(401).send({ error: 'Please authenticate' })
    }
  
}

export default auth;