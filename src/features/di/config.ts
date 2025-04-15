import { container } from "tsyringe";
import { FEATURES_TYPES } from "./types";
import { FeaturesApiAdapter } from "@/features/adapters/secondary/features-api-adapter";
import { FetchFeaturesUsecase } from "@/features/application/usecases/fetch-features-usecase";
import { FeaturesClientAdapter } from "@/features/adapters/primary/features-client-adapter";
import { AddFeatureUsecase } from "@/features/application/usecases/add-feature-usecase";
import { EditFeatureUsecase } from "@/features/application/usecases/edit-feature-usecase";
import { FetchFeatureUsecase } from "@/features/application/usecases/fetch-feature-usecase";
import { DeleteFeatureUsecase } from "@/features/application/usecases/delete-feature-usecase";
import { SaveOrderUsecase } from "@/features/application/usecases/save-order-usecase";
import { IsFeatureOwnerUsecase } from "@/features/application/usecases/is-feature-owner-usecase";
import { GetMustHaveFeaturesUsecase } from "@/features/application/usecases/get-must-have-features-usecase";

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

  container.register(FEATURES_TYPES.GetMustHaveFeaturesUsecase, {
    useClass: GetMustHaveFeaturesUsecase,
  });

  // adapters
  container.register(FEATURES_TYPES.FeaturesClientAdapter, {
    useClass: FeaturesClientAdapter,
  });
};
