import Elysia from "elysia";

import { Router } from "@/routers/utilities";
import { versionRouter } from "@/routers/version.router";

const route: Router = {
  prefix: "/api",
  name: "api-router",
  detail: {
    tags: ["Base"],
  },
};

export const apiRouter = new Elysia(route).use(versionRouter);
