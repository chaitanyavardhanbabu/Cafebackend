import express from "express";
import {authenticate,authorize} from '../middlewares/auth.js';
import {
  login,
   register,
   showusers,
   updateUser,
   deleteUser,
   profile,
  } from "../Controllers/usercontroller.js";

  const Router = express.Router();
Router.post("/register", register);

Router.post("/login", login);

Router.get("/showusers",authenticate, authorize("admin"),showusers);

Router.patch("/:id", authenticate, authorize("admin"),updateUser);

Router.delete("/:id", authenticate, authorize("admin"), deleteUser);

Router.get("/:id/profile", authenticate, profile );

export default Router;