import Elysia from "elysia";

import { Router } from "@/routers/utilities";

const router: Router = {
  prefix: "/v1",
  name: "version-router",
  detail: {
    tags: ["Base"],
  },
};

export const versionRouter = new Elysia(router);
