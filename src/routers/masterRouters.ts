import { Router } from 'express';

import { findAllLinks, findLinkById, postLink, updatLink, deleteLink } from '../controllers/link'
import { findAllUsers, findUserById, createUser, deleteUser, loginUser, logoutUser } from '../controllers/user'
import { findAllnotes, findNoteById, postNote, deleteNote } from '../controllers/note'
import auth from '../middleware/auth';


const router = Router();
// link
router.get('/links', auth, findAllLinks);
router.get('/links/:id', auth,  findLinkById);
router.post('/links', auth,  postLink);
router.put('/links/:id', auth, updatLink);
router.delete('/links/:id', auth, deleteLink);

// user
router.post('/auth/create',  createUser);
router.post('/auth/login', loginUser);
router.post('/auth/logout', auth, logoutUser);
router.get('/users/profile', auth, findAllUsers);
router.get('/users/:id', auth, findUserById);
router.delete('/users/:id', auth,  deleteUser);

// note
router.get('/article', findAllnotes);
router.get('/article/:id',  findNoteById);
router.post('/article',  postNote);
router.delete('/article/:id', deleteNote);


export default router;