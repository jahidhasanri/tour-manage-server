import { Router } from "express";
import { userConterolers } from "./user.controller";

const router = Router();
router.post('/register',userConterolers.CreateUser)
router.get('/all-users',userConterolers.getAllUsers)
export const UserRoutes = router;