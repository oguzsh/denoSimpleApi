import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getData,
  getSelectedData,
  addData,
  updateData,
  deleteData,
} from "../controllers/mockController.ts";

const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "Welcome to mock data api, go /api/data!";
  })
  .get("/api/data", getData)
  .get("/api/data/:username", getSelectedData)
  .post("/api/data", addData)
  .put("/api/data/:username", updateData)
  .delete("/api/data/:username", deleteData);

export default router;
