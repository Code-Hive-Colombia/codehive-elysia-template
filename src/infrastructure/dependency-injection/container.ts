import { container } from "tsyringe";

import { registerInfrastructure } from "@/infrastructure/dependency-injection/registers/infrastructure.register";
import { registerRepository } from "@/infrastructure/dependency-injection/registers/repository.register";
import { registerService } from "@/infrastructure/dependency-injection/registers/service.register";

registerInfrastructure(container);
registerService(container);
registerRepository(container);

export { container as diContainer } from "tsyringe";
