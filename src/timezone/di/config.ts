import { container } from "tsyringe";
import { TIME_ZONE_TYPES } from "./types";
import { UpdateDirectoryWithCurrentTimeUsecase } from "@/timezone/application/usecases/updateDirectoryWithCurrentTimeUsecase";

export const registerTimezoneDependencies = () => {
  // ports

  // adapters

  // usecases
  container.register(TIME_ZONE_TYPES.UpdateDirectoryWithCurrentTimeUsecase, {
    useClass: UpdateDirectoryWithCurrentTimeUsecase,
  });
};
