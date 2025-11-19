import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import innsending from "./data/innsending.json";

const api = new Hono();

// Enable CORS for all routes
api.use(
  "/*",
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  }),
);

api.get("/api/innsending", (c) => {
  return c.json(innsending);
});

serve(api);
