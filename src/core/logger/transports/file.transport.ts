import winston from "winston";

import { loggerFormat } from "@/core/logger/transports/format";

import "winston-daily-rotate-file";

export const getFileTransport = () =>
  new winston.transports.DailyRotateFile({
    filename: "application-%DATE%.log",
    dirname: "logs",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "15d",
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      loggerFormat
    ),
  });
