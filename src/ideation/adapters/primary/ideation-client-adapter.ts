import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationClientPort } from "@/ideation/ports/primary/ideation-client-port";
import { FetchIdeationClientRequestDto } from "@/ideation/application/dtos/request.dto";
import { FetchIdeationClientResponseDto } from "@/ideation/application/dtos/response.dto";
import { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";

@injectable()
export class IdeationClientAdapter implements IdeationClientPort {
  constructor(
    @inject(TYPES.FetchIdeationUsecase)
    private readonly fetchIdeationUsecase: FetchIdeationUsecase,
  ) {}

  async fetchIdeation({
    teamId,
  }: FetchIdeationClientRequestDto): Promise<FetchIdeationClientResponseDto> {
    return await this.fetchIdeationUsecase.execute({ teamId });
  }
}
