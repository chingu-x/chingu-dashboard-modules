import type { InjectionToken } from "tsyringe";
import type { FeaturesApiPort } from "@/features/ports/secondary/features-api-port";
import type { FetchFeaturesUsecase } from "@/features/application/usecases/fetch-features-usecase";
import type { FeaturesClientAdapter } from "@/features/adapters/primary/features-client-adapter";
import type { AddFeatureUsecase } from "@/features/application/usecases/add-feature-usecase";
import type { EditFeatureUsecase } from "@/features/application/usecases/edit-feature-usecase";
import type { FetchFeatureUsecase } from "@/features/application/usecases/fetch-feature-usecase";
import type { DeleteFeatureUsecase } from "@/features/application/usecases/delete-feature-usecase";
import type { SaveOrderUsecase } from "@/features/application/usecases/save-order-usecase";
import type { IsFeatureOwnerUsecase } from "@/features/application/usecases/is-feature-owner-usecase";

export const FEATURES_TYPES = {
  // ports
  FeaturesApiPort: Symbol.for(
    "FeaturesApiPort",
  ) as InjectionToken<FeaturesApiPort>,

  // usecases
  FetchFeaturesUsecase: Symbol.for(
    "FetchFeaturesUsecase",
  ) as InjectionToken<FetchFeaturesUsecase>,

  AddFeatureUsecase: Symbol.for(
    "AddFeatureUsecase",
  ) as InjectionToken<AddFeatureUsecase>,

  EditFeatureUsecase: Symbol.for(
    "EditFeatureUsecase",
  ) as InjectionToken<EditFeatureUsecase>,

  FetchFeatureUsecase: Symbol.for(
    "FetchFeatureUsecase",
  ) as InjectionToken<FetchFeatureUsecase>,

  DeleteFeatureUsecase: Symbol.for(
    "DeleteFeatureUsecase",
  ) as InjectionToken<DeleteFeatureUsecase>,

  SaveOrderUsecase: Symbol.for(
    "SaveOrderUsecase",
  ) as InjectionToken<SaveOrderUsecase>,

  IsFeatureOwnerUsecase: Symbol.for(
    "IsFeatureOwnerUsecase",
  ) as InjectionToken<IsFeatureOwnerUsecase>,

  // adapters
  FeaturesClientAdapter: Symbol.for(
    "FeaturesClientAdapter",
  ) as InjectionToken<FeaturesClientAdapter>,
};
