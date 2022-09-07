import { Router } from 'express';
import Controller from './../controllers/index.js';
import rateLimiter from './../middlewares/rateLimiter.js';
var router = Router();
router.get('/7', rateLimiter, Controller.validator, Controller.getVideo)
export default router;