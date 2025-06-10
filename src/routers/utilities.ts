import Elysia from "elysia";

export type Router = ConstructorParameters<typeof Elysia>["0"];

export const createApiRouter = (router: Router) => {
  return new Elysia(router);
};
