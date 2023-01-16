import express from "express";
import {
  getAllUsers,
  getSpecificUser,
  createUser,
  updateSpecificUser,
  deleteSpecificUser,
} from "../controllers/usersControllers.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router
  .route("/:id")
  .get(getSpecificUser)
  .put(updateSpecificUser)
  .delete(deleteSpecificUser);

export default router;
