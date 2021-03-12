import { Router } from 'express';

import { findAllLinks, findLinkById, postLink, updatLink, deleteLink } from '../controllers/link'
import { findAllUsers, findUserById, creatUser, deleteUser } from '../controllers/user'


const router = Router();
// link
router.get('/links', findAllLinks);
router.get('/links/:id',  findLinkById);
router.post('/links',  postLink);
router.put('/links/:id', updatLink);
router.delete('/links/:id', deleteLink);

// user
router.get('/users', findAllUsers);
router.get('/users/:id',  findUserById);
router.post('/users',  creatUser);
router.delete('/users/:id', deleteUser);


export default router;