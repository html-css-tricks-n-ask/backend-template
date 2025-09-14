import express from 'express';

import { getUsers, createUser } from '../controller/userController.js';

const router = express.Router();

router.get("/getUser", getUsers);
router.post("/createUser", createUser);


export default router;