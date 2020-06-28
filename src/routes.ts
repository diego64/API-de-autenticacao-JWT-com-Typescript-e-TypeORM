import { Router } from 'express';

//Importação de Controllers
import authMiddleware from './middlewares/authMiddleware'
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

//Declaração das rotas
router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/users', authMiddleware, UserController.index)

export default router;