import express from 'express';
const router = express.Router();
import postCtrl from '../controllers/PostController.js';
import auth from '../middleware/Auth.js';
import decodeToken from '../middleware/DecodeToken.js';

//Token Decryption Middleware
router.use(decodeToken);

// GET
router.get('/tags', postCtrl.getTags);
router.get('/all', postCtrl.getAll);
router.get('/latest', postCtrl.getLatest);
router.get('/relevant', postCtrl.getRelevant);
router.get('/populate', postCtrl.getPopulate);
router.get('/top/:type', postCtrl.getTopPost);
// router.get('/search/:type', postCtrl.getSearch);
router.get('/:id/comments', postCtrl.getCommentsByPostId);
router.get('/:slug', postCtrl.getPostBySlug);

// Middleware Check Permissions
router.use(auth);

// POST

router.post('/:id/reactions', postCtrl.reactionsPost);
router.post('/:id/comments', postCtrl.addComment);
router.post('/comments/:id/reactions', postCtrl.reactionsComment);

//PUT
router.put('/comments/:id', postCtrl.editComment);

//DELETE
router.delete('/:id/comments/:idc', postCtrl.deleteComment);

export default router;
