import type { InjectionToken } from "tsyringe";
import type { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";

export const REST_API_TYPES = {
  RestApiPort: Symbol.for("RestApiPort") as InjectionToken<RestApiPort>,
};
