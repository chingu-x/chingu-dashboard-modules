import { container } from "tsyringe";
import { FEATURES_TYPES } from "./types";
import { FeaturesApiAdapter } from "@/features/adapters/secondary/featuresApiAdapter";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";
import { FeaturesClientAdapter } from "@/features/adapters/primary/featuresClientAdapter";

export const registerFeaturesDependencies = () => {
  // ports
  container.register(FEATURES_TYPES.FeaturesApiPort, {
    useClass: FeaturesApiAdapter,
  });

  // usecases
  container.register(FEATURES_TYPES.FetchFeaturesUsecase, {
    useClass: FetchFeaturesUsecase,
  });

  // adapters
  container.register(FEATURES_TYPES.FeaturesClientAdapter, {
    useClass: FeaturesClientAdapter,
  });
};
