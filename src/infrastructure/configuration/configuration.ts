import {
  Environment,
  EnvironmentSchema,
} from "@/infrastructure/configuration/environment.schema";

export class Configuration {
  public env: Environment;

  constructor(initialConfiguration?: Environment) {
    this.env = this.loadEnvironment(initialConfiguration ?? process.env);
  }

  private loadEnvironment(source: object) {
    return EnvironmentSchema.parse(source);
  }
}
