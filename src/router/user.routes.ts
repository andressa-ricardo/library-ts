import { Router } from "express";

import { createUser, getUsers } from "../controller/user.controller";

const router = Router();

router.post("/users", createUser);

router.get("/users", getUsers);
