import express from "express";
import { createBlog, getBlogs, getBlogById } from "../controllers/blogController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect blog routes
router.use(authenticateToken);

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);

export default router;
