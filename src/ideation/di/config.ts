import { container } from "tsyringe";
import { IDEATION_TYPES } from "./types";
import { IdeationApiAdapter } from "@/ideation/adapters/secondary/ideation-api-adapter";
import { IdeationClientAdapter } from "@/ideation/adapters/primary/ideation-client-adapter";
import { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";
import { AddIdeationUsecase } from "@/ideation/application/usecases/add-ideation-usecase";
import { EditIdeationUsecase } from "@/ideation/application/usecases/edit-ideation-usecase";
import { DeleteIdeationUsecase } from "@/ideation/application/usecases/delete-ideation-usecase";
import { AddIdeationVoteUsecase } from "@/ideation/application/usecases/add-ideation-vote-usecase";
import { RemoveIdeationVoteUsecase } from "@/ideation/application/usecases/remove-ideation-vote-usecase";
import { FinalizeIdeationUsecase } from "@/ideation/application/usecases/finalize-ideation-usecase";
import { GetIdeationByIdUsecase } from "@/ideation/application/usecases/get-ideation-by-id-usecase";

export const registerIdeationDependencies = () => {
  // ports
  container.register(IDEATION_TYPES.IdeationApiPort, {
    useClass: IdeationApiAdapter,
  });

  // usecases
  container.register(IDEATION_TYPES.FetchIdeationUsecase, {
    useClass: FetchIdeationUsecase,
  });

  container.register(IDEATION_TYPES.AddIdeationUsecase, {
    useClass: AddIdeationUsecase,
  });

  container.register(IDEATION_TYPES.EditIdeationUsecase, {
    useClass: EditIdeationUsecase,
  });

  container.register(IDEATION_TYPES.DeleteIdeationUsecase, {
    useClass: DeleteIdeationUsecase,
  });

  container.register(IDEATION_TYPES.AddIdeationVoteUsecase, {
    useClass: AddIdeationVoteUsecase,
  });

  container.register(IDEATION_TYPES.RemoveIdeationVoteUsecase, {
    useClass: RemoveIdeationVoteUsecase,
  });

  container.register(IDEATION_TYPES.FinalizeIdeationUsecase, {
    useClass: FinalizeIdeationUsecase,
  });

  container.register(IDEATION_TYPES.GetIdeationByIdUsecase, {
    useClass: GetIdeationByIdUsecase,
  });

  // adapters
  container.register(IDEATION_TYPES.IdeationClientAdapter, {
    useClass: IdeationClientAdapter,
  });
};
