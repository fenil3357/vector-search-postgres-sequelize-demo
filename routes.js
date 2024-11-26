import { Router } from "express";
import { generateEmbeddingsController } from "./controllers/insertContent.js";
import { vectorSearchController } from "./controllers/vectorSearch.js";

const indexRouter = Router();

indexRouter.post('/generate-embeddings', generateEmbeddingsController);
indexRouter.post('/vector-search', vectorSearchController);

export default indexRouter;