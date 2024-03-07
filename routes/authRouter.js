import { Router } from 'express';
const router = Router();

import {
  registerUser,
  loginUser,
  logout,
} from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

// router.route('/register').post(registerUser);
// router.route('/login').post(loginUser);

router.post('/register', validateRegisterInput, registerUser);
router.post('/login', validateLoginInput, loginUser);
router.get('/logout', logout);

export default router;
