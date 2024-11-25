import { Router } from "express";
import { generateEmbeddingsController } from "./controllers/insertContent.js";

const indexRouter = Router();

indexRouter.post('/generate-embeddings', generateEmbeddingsController);

export default indexRouter;