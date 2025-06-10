import winston from "winston";

export const loggerFormat = winston.format.printf(
  ({ timestamp, level, message, scope }) => {
    return `${timestamp} (${level}) : [${String(scope).toUpperCase()}] ${
      typeof message === "string"
        ? message
        : JSON.stringify(message, undefined, 2)
    }`;
  }
);
