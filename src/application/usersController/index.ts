import { Router } from "express";
import rescue from "../../rescue";

const router = Router();

const callUsers = (_req, res) =>
  res.status(201).send();

router.post("/", rescue(callUsers));

export default router;
