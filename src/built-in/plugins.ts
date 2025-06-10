import Elysia from "elysia";

import { errorPlugin } from "@/built-in/error/error.plugin";
import { swaggerPlugin } from "@/built-in/swagger/swagger.plugin";

export const builtinPlugin = () =>
  new Elysia({ name: "builtin-plugin" })
    .use(errorPlugin())
    .use(swaggerPlugin())
    .as("global");
