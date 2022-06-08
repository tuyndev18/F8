import express from 'express';
const router = express.Router();
import userController from '../controllers/UserController.js';
import auth from '../middleware/Auth.js';
import decodeToken from '../middleware/DecodeToken.js';

// GET
router.get('/:userName', userController.getUserInfo);
router.get('/:userId/posts', userController.getUserPosts);

//Middle Authentication
router.use(auth);
router.use(decodeToken);

router.get('/posts/saved', userController.savedPost);

// POST
router.post('/posts', userController.addPost);
router.post('/notifications/add', userController.addNotification);
router.post('/notifications/active/:type', userController.activeNotification);
router.post('/:userId/follow', userController.followUser);
router.post('/:userId/unfollow', userController.unfollowUser);
router.post('/posts/:id/save', userController.savePost);
router.post('/posts/:id/unsave', userController.unsavePost);

// DELETE
router.delete('/posts/:id', userController.deletePost);

//PUT
router.put('/').put(userController.editUser);
router.put('/posts/:id', userController.editPost);

export default router;
