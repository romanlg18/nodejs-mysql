import express from "express";
import {login} from "../Controllers/login.js";


const userRouter = express.Router();

//LOGIN 
userRouter.post("/Login/", login);

export default userRouter;