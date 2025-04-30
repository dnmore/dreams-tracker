import express from "express";

import {
  getDreams,
  createDream,
  updateDream,
  deleteDream,
} from "../controllers/dream.controller.js";

const router = express.Router();

router.get("/", getDreams);

router.post("/", createDream);

router.put("/:id", updateDream);

router.delete("/:id", deleteDream);
export default router;
