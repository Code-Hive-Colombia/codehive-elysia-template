import { DependencyContainer, Lifecycle } from "tsyringe";

import { LoggerService } from "@/core/logger/logger.service";

export const registerService = (container: DependencyContainer) => {
  // Application logger
  container.register(
    LoggerService,
    { useClass: LoggerService },
    { lifecycle: Lifecycle.Singleton }
  );
};
