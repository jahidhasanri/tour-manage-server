import { Router } from "express";
import { userConterolers } from "./user.controller";

const router = Router();
router.post('/register',userConterolers.CreateUser)
export const UserRoutes = router;