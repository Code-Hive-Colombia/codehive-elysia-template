import winston from "winston";

import { loggerFormat } from "@/core/logger/transports/format";

export const getConsoleTransport = () =>
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.colorize({ all: true }),
      loggerFormat
    ),
  });
