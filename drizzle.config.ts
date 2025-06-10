import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/**/*.repository.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.PG_URL!,
  },
});
