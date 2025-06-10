import Elysia from "elysia";

export const errorPlugin = () =>
  new Elysia({ name: "error-plugin" })
    .onError(({ code, error }) => {
      if (code === "NOT_FOUND") {
        return { message: "endpoint not found" };
      }

      return new Response(error.toString());
    })
    .as("global");
