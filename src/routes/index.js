import { Router } from 'express';
import { prueba } from '../controllers/prueba.js';

const router = Router();

router.get('/login', prueba);

export default router;
