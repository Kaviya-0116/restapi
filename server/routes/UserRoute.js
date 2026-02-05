import express from "express";
import { create , deleteUser, getAllUsers, getUserById, update } from "../controller/UserController.js";
const route=express.Router()
route.post("/user",create)
route.get("/Users",getAllUsers)
route.get("/User/:id",getUserById)
route.put("/update/User/:id",update)
route.delete("/delete/User/:id",deleteUser)








export default route