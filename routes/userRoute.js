import express from 'express';
import { getUsers, registerUser, loginUser } from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/getUser", authMiddleware, getUsers);
router.post("/registerUser",  registerUser);
router.post("/loginUser", loginUser);

export default router;