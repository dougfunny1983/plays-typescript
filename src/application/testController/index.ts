import { Router } from "express";
import rescue from '../../rescue';

const router = Router();

const callTest = (_req, res) =>
  res.status(200).json({ message: "Hello, Word! Trybe" });

router.get("/", rescue(callTest));

export default router;
