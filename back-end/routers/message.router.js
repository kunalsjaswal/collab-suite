import express from 'express';
import { deleteMessage, createMessage } from '../controllers/message.controller.js';

const messageRouter = express.Router();

messageRouter.post("/message", createMessage);
messageRouter.delete("/message", deleteMessage);

export default messageRouter;