import { autoInjectable } from "tsyringe";
import winston from "winston";

import { LoggerScope } from "@/core/logger/logger-scope";
import { getLoggerTransports } from "@/core/logger/logger-transport";
import { Configuration } from "@/infrastructure/configuration/configuration";

type LoggerMessage = {
  message: string;
  scope: LoggerScope;
};

@autoInjectable()
export class LoggerService {
  private logger: winston.Logger;

  constructor(private configuration: Configuration) {
    this.logger = winston.createLogger({
      transports: getLoggerTransports(this.configuration.env.LOG_MODE),
    });
  }

  info({ message, scope }: LoggerMessage) {
    this.logger.info(message, { scope });
  }

  error({ message, scope }: LoggerMessage) {
    this.logger.error(message, { scope });
  }

  warn({ message, scope }: LoggerMessage) {
    this.logger.warn(message, { scope });
  }

  debug({ message, scope }: LoggerMessage) {
    this.logger.debug(message, { scope });
  }
}
