import { container } from "tsyringe";
import { FEATURES_TYPES } from "./types";
import { FeaturesApiAdapter } from "@/features/adapters/secondary/featuresApiAdapter";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";
import { FeaturesClientAdapter } from "@/features/adapters/primary/featuresClientAdapter";
import { AddFeatureUsecase } from "@/features/application/usecases/addFeatureUsecase";
import { EditFeatureUsecase } from "@/features/application/usecases/editFeatureUsecase";
import { FetchFeatureUsecase } from "@/features/application/usecases/fetchFeatureUsecase";
import { DeleteFeatureUsecase } from "@/features/application/usecases/deleteFeatureUsecase";
import { SaveOrderUsecase } from "@/features/application/usecases/saveOrderUsecase";
import { IsFeatureOwnerUsecase } from "@/features/application/usecases/isFeatureOwnerUsecase";

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

  container.register(FEATURES_TYPES.FetchFeatureUsecase, {
    useClass: FetchFeatureUsecase,
  });

  container.register(FEATURES_TYPES.DeleteFeatureUsecase, {
    useClass: DeleteFeatureUsecase,
  });

  container.register(FEATURES_TYPES.SaveOrderUsecase, {
    useClass: SaveOrderUsecase,
  });

  container.register(FEATURES_TYPES.IsFeatureOwnerUsecase, {
    useClass: IsFeatureOwnerUsecase,
  });

  // adapters
  container.register(FEATURES_TYPES.FeaturesClientAdapter, {
    useClass: FeaturesClientAdapter,
  });
};
