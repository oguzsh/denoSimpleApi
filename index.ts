import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

const port = 8000;
const app = new Application();

app.use(router.routes());

/* Allowed Methods 
* GET | POST | DELETE | HEAD | OPTIONS | PATCH | PUT
*/
app.use(router.allowedMethods());

console.log(`Server started, listening on port:  ${port} `);

await app.listen({ port: 8000 });
