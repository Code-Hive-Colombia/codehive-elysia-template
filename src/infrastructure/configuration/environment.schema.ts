import z from "zod";

export const EnvironmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().min(1000).default(3000),
  LOG_MODE: z.enum(["console", "file", "both"]).default("console"),
  PG_URL: z.string(),
});

export type Environment = z.infer<typeof EnvironmentSchema>;
