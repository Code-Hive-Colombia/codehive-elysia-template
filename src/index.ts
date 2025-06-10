import "reflect-metadata";

import Elysia from "elysia";

import { builtinPlugin } from "@/built-in/plugins";
import { LoggerScope } from "@/core/logger/logger-scope";
import { LoggerService } from "@/core/logger/logger.service";
import { Configuration } from "@/infrastructure/configuration/configuration";
import { diContainer } from "@/infrastructure/dependency-injection/container";
import { apiRouter } from "@/routers/api.router";

const configuration = diContainer.resolve(Configuration);
const logger = diContainer.resolve(LoggerService);

export const app = new Elysia()
  .use(builtinPlugin())
  .use(apiRouter)
  .get("/", () => ({
    version: "1.0.0",
  }))
  .listen(configuration.env.PORT, server => {
    logger.info({
      message: `Server is running at http://${server.hostname}:${server.port}`,
      scope: LoggerScope.SERVER,
    });
  });
