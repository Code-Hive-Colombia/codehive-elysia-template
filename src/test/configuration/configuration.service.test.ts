import { expect, test, describe } from "bun:test";

import { Configuration } from "@/infrastructure/configuration/configuration";
import { Environment } from "@/infrastructure/configuration/environment.schema";

describe("ConfigurationService", () => {
  const service = new Configuration();

  test("should load default environment variables", () => {
    expect(service.env).toBeDefined();
  });

  test("should load PORT correctly", () => {
    expect(service.env.PORT).toBe(Number(process.env.PORT));
  });

  test("should have required environment variables", () => {
    const requiredVariables = [
      "PORT",
      "NODE_ENV",
      "DATABASE",
    ] as (keyof Configuration["env"])[];

    for (const key of requiredVariables) {
      expect(service.env[`${key}`]).toBeDefined();
    }
  });

  test("should throw or handle error on invalid env config", () => {
    const brokenEnvironment: Environment = {
      PORT: -2,
      NODE_ENV: "development",
      LOG_MODE: "console",
      PG_URL: "",
    };
    expect(() => new Configuration(brokenEnvironment)).toThrow();
  });
});
