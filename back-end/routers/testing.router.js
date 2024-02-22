import express from "express";
import { getUsers } from "../controllers/test.controller.js";
const testingRouter = express.Router();

testingRouter.get("/getusers", getUsers)
// testingRouter.delete("deleteAll", deleteAll)

export default testingRouter;
