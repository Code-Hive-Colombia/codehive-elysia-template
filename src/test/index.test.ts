import { describe, expect, test } from "bun:test";

import { app } from "@/index";

describe("Main router of Elysia", () => {
  test("Index route show API information", async () => {
    const response = await app.handle(new Request("http://localhost/"));
    const data = await response.json();
    expect(data).toMatchObject({ version: "1.0.0" });
  });
});
