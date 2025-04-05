import type { InjectionToken } from "tsyringe";
import type { RestApiPort } from "@/rest-api/ports/secondary/rest-api-port";

export const REST_API_TYPES = {
  // ports
  RestApiPort: Symbol.for("RestApiPort") as InjectionToken<RestApiPort>,

  // adapters

  // usecases
};
