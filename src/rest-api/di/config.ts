import { container } from "tsyringe";
import { REST_API_TYPES } from "./types";
import { AxiosAdapter } from "@/rest-api/adapters/secondary/AxiosAdapter";

export const registerRestApiDependencies = () => {
  container.register(REST_API_TYPES.RestApiPort, { useClass: AxiosAdapter });
};
