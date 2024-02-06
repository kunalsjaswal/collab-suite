import express from 'express';
import { createGroup, joinGroup, getGroup } from '../controllers/group.controller.js';

const groupRouter = express.Router();

groupRouter.post("/group/create", createGroup)
groupRouter.post("/group/join", joinGroup)
groupRouter.get("/group", getGroup)

export default groupRouter;