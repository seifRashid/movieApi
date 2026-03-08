import express from 'express';
import { register } from '../controllers/authController';
const router = express.Router();

// Define your movie routes here
// Instead of the callback will use a controller function to handle the logic of the route
router.post('/register', register);

export default router;