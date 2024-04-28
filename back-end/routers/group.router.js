import express from 'express';
import { createGroup, joinGroup, getGroups } from '../controllers/group.controller.js';

const groupRouter = express.Router();

groupRouter.post("/group/create", createGroup)
groupRouter.post("/group/join", joinGroup)
groupRouter.post("/groups", getGroups)

export default groupRouter;