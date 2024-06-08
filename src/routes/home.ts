import {Router} from 'express'
import {demoResponse} from '../controllers/home'



 const router = Router();

router.get("/", demoResponse);

export default router