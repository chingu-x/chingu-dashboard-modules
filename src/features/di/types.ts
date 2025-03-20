import type { InjectionToken } from "tsyringe";
import type { FeaturesApiPort } from "@/features/ports/secondary/featuresApiPort";
import type { FetchFeaturesUsecase } from "@/features/application/usecases/fetchFeaturesUsecase";
import type { FeaturesClientAdapter } from "@/features/adapters/primary/featuresClientAdapter";
import type { AddFeatureUsecase } from "@/features/application/usecases/addFeatureUsecase";
import type { EditFeatureUsecase } from "@/features/application/usecases/editFeatureUsecase";
import type { FetchFeatureUsecase } from "@/features/application/usecases/fetchFeatureUsecase";

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

  // adapters
  FeaturesClientAdapter: Symbol.for(
    "FeaturesClientAdapter",
  ) as InjectionToken<FeaturesClientAdapter>,
};
