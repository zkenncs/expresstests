import { Router } from "express";
import { getStrikerById } from "../controllers/strikerController.js";

const strikerRouter = Router();

strikerRouter.get("/view", (req, res) => {
  res.render("indexview", {name: "striker"});
});

strikerRouter.post("/view", (req, res) => {
  res.send("Form has been submitted with: " + req.body.company);
});

export { strikerRouter };