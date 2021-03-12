import { Router } from 'express';

import { findAllLinks, findLinkById, postLink, updatLink, deleteLink } from '../controllers/link'


const router = Router();

router.get('/links', findAllLinks);
router.get('/links/:id',  findLinkById);
router.post('/links',  postLink);
router.put('/links/:id', updatLink);
router.delete('/links/:id', deleteLink);


export default router;