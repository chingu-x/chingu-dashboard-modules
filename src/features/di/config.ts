import { container } from "tsyringe";
import { FEATURES_TYPES } from "./types";
import { FeaturesApiAdapter } from "@/features/adapters/secondary/featuresApiAdapter";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";
import { FeaturesClientAdapter } from "@/features/adapters/primary/featuresClientAdapter";
import { AddFeatureUsecase } from "@/features/application/usecases/addFeatureUsecase";
import { EditFeatureUsecase } from "@/features/application/usecases/editFeatureUsecase";

export const registerFeaturesDependencies = () => {
  // ports
  container.register(FEATURES_TYPES.FeaturesApiPort, {
    useClass: FeaturesApiAdapter,
  });

  // usecases
  container.register(FEATURES_TYPES.FetchFeaturesUsecase, {
    useClass: FetchFeaturesUsecase,
  });

  container.register(FEATURES_TYPES.AddFeatureUsecase, {
    useClass: AddFeatureUsecase,
  });

  container.register(FEATURES_TYPES.EditFeatureUsecase, {
    useClass: EditFeatureUsecase,
  });

  // adapters
  container.register(FEATURES_TYPES.FeaturesClientAdapter, {
    useClass: FeaturesClientAdapter,
  });
};
