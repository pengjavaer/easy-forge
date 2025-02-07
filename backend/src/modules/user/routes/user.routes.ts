import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.post('/', userController.createUser.bind(userController));
router.get('/', userController.getUsers.bind(userController));

export default router; 