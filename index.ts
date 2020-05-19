import {
  Application,
  Router,
} from "https://deno.land/x/denotrain@v0.4.4/mod.ts";

// default port : 3000, host: 0.0.0.0
const app = new Application({ port: 8000 });

const router = new Router();

app.get("/", (ctx) => {
  return { user: "oguzsh" };
});

await app.run();
