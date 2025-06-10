import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { autoInjectable } from "tsyringe";

import { Configuration } from "@/infrastructure/configuration/configuration";

@autoInjectable()
export class Database {
  private database: NodePgDatabase;

  constructor(private configuration: Configuration) {
    this.database = drizzle(this.configuration.env.PG_URL);
  }

  get instance() {
    return this.database;
  }
}
