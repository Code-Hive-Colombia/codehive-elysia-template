import { DependencyContainer } from "tsyringe";

export const registerRepository = (container: DependencyContainer) => {
  container.register("repository", { useValue: "Repository" });
};
