import { Router } from 'express';

import { findAllLinks, findLinkById, postLink, updatLink, deleteLink } from '../controllers/link'
import { findAllUsers, findUserById, createUser, deleteUser, loginUser, logoutUser } from '../controllers/user'
import { findAllnotes, findNoteById, postNote, deleteNote } from '../controllers/note'
import auth from '../middleware/auth';


const router = Router();
// link
router.get('/links', findAllLinks);
router.get('/links/:id',  findLinkById);
router.post('/links',  postLink);
router.put('/links/:id', updatLink);
router.delete('/links/:id', deleteLink);

// user
router.post('/users/create',  createUser);
router.post('/users/login', loginUser);
router.post('/users/logout', auth, logoutUser);
router.get('/users/profile', auth, findAllUsers);
router.get('/users/:id',  findUserById);
router.delete('/users/:id', auth,  deleteUser);

// note
router.get('/article', findAllnotes);
router.get('/article/:id',  findNoteById);
router.post('/article',  postNote);
router.delete('/article/:id', deleteNote);


export default router;