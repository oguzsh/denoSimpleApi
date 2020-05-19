import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

const app = new Application();

app.use(router.routes());

/* Allowed Methods 
* GET | POST | DELETE | HEAD | OPTIONS | PATCH | PUT
*/
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
