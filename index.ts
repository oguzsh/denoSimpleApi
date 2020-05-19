import {
  Application,
  Router,
} from "https://deno.land/x/denotrain@v0.4.4/mod.ts";

import { mockData } from "./mockData.ts";

// default port : 3000, host: 0.0.0.0
const app = new Application({ port: 8000 });

const router = new Router();

app.get("/", () => {
  return "Welcome to mock data api, go /api/data";
});

app.use("/api", router);

router.get("/data", () => {
  return { data: mockData };
});

await app.run();
