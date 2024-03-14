import controller from "../controller/index.js";
import { Router } from "express";

export const router = Router()
    .get('/fruit', controller.get)
    .post('/fruit', controller.post)
    .put('/fruit/:id', controller.update)
    .delete('/fruit/:id', controller.delete)