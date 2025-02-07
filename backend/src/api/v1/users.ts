import { Router } from 'express';
import { UserController } from '../../controllers/user';
import { authMiddleware } from '../../middleware/auth';

const router = Router();
const userController = new UserController();

router.get('/', authMiddleware, userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', authMiddleware, userController.getUserById);
router.put('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);

export default router; 