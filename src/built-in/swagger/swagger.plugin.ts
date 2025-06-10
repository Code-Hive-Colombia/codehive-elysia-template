import swagger from "@elysiajs/swagger";

export const swaggerPlugin = () => {
  return swagger({
    documentation: {
      info: {
        title: "Elysia Template",
        version: "1.0.0",
        description: `Elysia swagger example`,
        contact: {
          name: "Code Hive Colombia",
          email: "contact@codehive.com.co",
        },
      },
      tags: [{ name: "Base", description: "Base API information endpoints" }],
    },
    scalarConfig: {
      customCss: "",
      theme: "deepSpace",
      hideModels: true,
    },
  });
};
