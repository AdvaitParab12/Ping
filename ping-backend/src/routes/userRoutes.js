import express from "express";
import {
  getUsers,
  saveUser,
  getUserById,
  removeUser,
  editUser,
} from "../controllers/userController.js";

import { editPassword } from "../controllers/passwordController.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/adduser", saveUser);

router.delete("/deleteuser/:id", removeUser);

router.put("/updateuser/:id", editUser);

router.put("/updatepassword/:id", editPassword);

export default router;
