import { getConsoleTransport } from "@/core/logger/transports/console.transport";
import { getFileTransport } from "@/core/logger/transports/file.transport";

export const getLoggerTransports = (mode: "console" | "file" | "both") => {
  switch (mode) {
    case "file": {
      return [getFileTransport()];
    }
    case "console": {
      return [getConsoleTransport()];
    }
    default: {
      return [getFileTransport(), getConsoleTransport()];
    }
  }
};
