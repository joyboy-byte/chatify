import express from "express"
import { getAllContacts, getChatPartners, getMessagesByUserID, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// the middleware sxecute in order - so requests get rate-limites first, then authenticated.
// this is actually more efficient since unauthenticated requets get blocked by rate limiting before hitting the auth middleware.

router.use(arcjetProtection, protectRoute);

router.get("/contacts",  getAllContacts);
router.get("/chats",  getChatPartners);
router.get("/:id",  getMessagesByUserID);
router.post("/send/:id",  sendMessage);

export default router