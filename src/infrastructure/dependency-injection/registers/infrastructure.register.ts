import { DependencyContainer, Lifecycle } from "tsyringe";

import { Configuration } from "@/infrastructure/configuration/configuration";
import { Database } from "@/infrastructure/database/database";

export const registerInfrastructure = (container: DependencyContainer) => {
  // Application configuration and environment variables
  container.register(Configuration, {
    useValue: new Configuration(),
  });

  // Application database
  container.register(
    Database,
    { useClass: Database },
    { lifecycle: Lifecycle.Singleton }
  );
};
