import { Router } from 'express'
import { signup, signin, logout, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile , deleteUserById, getUserById, updateUserById } from '../controller/user.controller.js'
import { authMiddleware, authorizedAsAdmin } from '../middlewares/auth.middleware.js'
const router = Router()

router.route('/')
        .post(signup)
        .get(authMiddleware, authorizedAsAdmin, getAllUsers)

router.route('/signin').post(signin)
router.route('/logout').post(logout)

router.route('/profile')
        .get(authMiddleware, getCurrentUserProfile)
        .put(authMiddleware, updateCurrentUserProfile)

//Admin routes
router.route('/:id')
        .delete(authMiddleware, authorizedAsAdmin, deleteUserById)
        .get(authMiddleware, authorizedAsAdmin, getUserById)
        .put(authMiddleware, authorizedAsAdmin, updateUserById)


export default router