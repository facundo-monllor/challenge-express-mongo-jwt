import { Router } from 'express';
import { signup } from '../controllers/signup.js';
import { login } from '../controllers/login.js';
import { verifyToken } from '../controllers/verifyToken.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify',verifyToken);

export default router;
