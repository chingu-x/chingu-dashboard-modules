import type { InjectionToken } from "tsyringe";
import type { IdeationApiPort } from "@/ideation/ports/secondary/ideation-api-port";
import type { IdeationClientAdapter } from "@/ideation/adapters/primary/ideation-client-adapter";
import type { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";
import type { AddIdeationUsecase } from "@/ideation/application/usecases/add-ideation-usecase";
import type { EditIdeationUsecase } from "@/ideation/application/usecases/edit-ideation-usecase";
import type { DeleteIdeationUsecase } from "@/ideation/application/usecases/delete-ideation-usecase";
import type { AddIdeationVoteUsecase } from "@/ideation/application/usecases/add-ideation-vote-usecase";
import type { RemoveIdeationVoteUsecase } from "@/ideation/application/usecases/remove-ideation-vote-usecase";
import type { FinalizeIdeationUsecase } from "@/ideation/application/usecases/finalize-ideation-usecase";
import type { GetIdeationByIdUsecase } from "@/ideation/application/usecases/get-ideation-by-id-usecase";
import type { IsCurrentUserVoteUsecase } from "@/ideation/application/usecases/is-current-user-vote-usecase";
import type { HasCurrentUserVoteUsecase } from "@/ideation/application/usecases/has-current-user-vote-usecase";

export const IDEATION_TYPES = {
  // ports
  IdeationApiPort: Symbol.for(
    "IdeationApiPort",
  ) as InjectionToken<IdeationApiPort>,

  // usecases
  FetchIdeationUsecase: Symbol.for(
    "FetchIdeationUsecase",
  ) as InjectionToken<FetchIdeationUsecase>,

  AddIdeationUsecase: Symbol.for(
    "AddIdeationUsecase",
  ) as InjectionToken<AddIdeationUsecase>,

  EditIdeationUsecase: Symbol.for(
    "EditIdeationUsecase",
  ) as InjectionToken<EditIdeationUsecase>,

  DeleteIdeationUsecase: Symbol.for(
    "DeleteIdeationUsecase",
  ) as InjectionToken<DeleteIdeationUsecase>,

  AddIdeationVoteUsecase: Symbol.for(
    "AddIdeationVoteUsecase",
  ) as InjectionToken<AddIdeationVoteUsecase>,

  RemoveIdeationVoteUsecase: Symbol.for(
    "RemoveIdeationVoteUsecase",
  ) as InjectionToken<RemoveIdeationVoteUsecase>,

  FinalizeIdeationUsecase: Symbol.for(
    "FinalizeIdeationUsecase",
  ) as InjectionToken<FinalizeIdeationUsecase>,

  GetIdeationByIdUsecase: Symbol.for(
    "GetIdeationByIdUsecase",
  ) as InjectionToken<GetIdeationByIdUsecase>,

  IsCurrentUserVoteUsecase: Symbol.for(
    "IsCurrentUserVoteUsecase",
  ) as InjectionToken<IsCurrentUserVoteUsecase>,

  HasCurrentUserVoteUsecase: Symbol.for(
    "HasCurrentUserVoteUsecase",
  ) as InjectionToken<HasCurrentUserVoteUsecase>,

  // adapters
  IdeationClientAdapter: Symbol.for(
    "IdeationClientAdapter",
  ) as InjectionToken<IdeationClientAdapter>,
};
