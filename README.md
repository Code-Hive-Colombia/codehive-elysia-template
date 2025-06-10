# ElysiaJS + Bun Starter Template

A modern, modular starter template built on top of [ElysiaJS](https://elysiajs.com/) and [Bun](https://bun.sh/), designed for building fast, type-safe backends with clean architecture and developer experience in mind.

## Features

✅ **Modular Router Structure**  
Split your app into domain-specific routes for better scalability and organization.

✅ **Dependency Injection**  
Built-in support using a lightweight DI pattern to keep services and infrastructure decoupled.

✅ **Drizzle ORM**  
Type-safe SQL-first ORM with PostgreSQL support, pre-configured and ready to use.

✅ **Winston Logger**  
Structured logging using Winston with custom configuration.

✅ **Testing with `bun:test`**  
Includes simple test setup using Bun's native test runner.

✅ **Preconfigured ESLint & Prettier**  
Enforces consistent code style and linting with minimal setup.

✅ **Environment Variables Validation**  
Schema-based validation for environment variables at startup.

✅ **Swagger Documentation**  
Default Swagger/OpenAPI docs enabled and customizable out of the box.

## Getting Started

```bash
bun install
bun run dev
```

## Scripts

- `bun run dev` – Start the development server
- `bun run build` – Build the app
- `bun test` – Run tests

## Roadmap

Future improvements may include:

- Authentication/authorization strategies
- Docker support

## License

MIT
