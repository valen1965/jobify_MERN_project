import { Router } from 'express';
import upload from '../middleware/multerMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authMiddleware.js';
// import { authorizePermissions } from '../middleware/authMiddleware.js';

router.route('/current-user').get(getCurrentUser);
router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStats,
]);

router.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default router;
