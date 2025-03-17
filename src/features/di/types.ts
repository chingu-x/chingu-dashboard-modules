import type { InjectionToken } from "tsyringe";
import type { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";
import type { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";
import type { FeaturesClientAdapter } from "@/features/adapters/primary/featuresClientAdapter";

export const FEATURES_TYPES = {
  // ports
  FeaturesApiPort: Symbol.for(
    "FeaturesApiPort",
  ) as InjectionToken<FeaturesApiPort>,

  // usecases
  FetchFeaturesUsecase: Symbol.for(
    "FetchFeaturesUsecase",
  ) as InjectionToken<FetchFeaturesUsecase>,

  // adapters
  FeaturesClientAdapter: Symbol.for(
    "FeaturesClientAdapter",
  ) as InjectionToken<FeaturesClientAdapter>,
};
