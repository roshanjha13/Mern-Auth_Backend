import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").post(registerUser);
router.route("/auth").post(authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/logout").post(logoutUser);

export default router;
