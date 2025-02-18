import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, books } = req.body;

  if (!name || !email) {
    res.status(400).json({ error: "Nome e email são obrigatórios." });
  }
  try {
    const user = await User.create({ name, email, books });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
