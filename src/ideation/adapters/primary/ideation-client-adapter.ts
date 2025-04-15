import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationClientPort } from "@/ideation/ports/primary/ideation-client-port";
import {
  AddIdeationClientRequestDto,
  FetchIdeationClientRequestDto,
} from "@/ideation/application/dtos/request.dto";
import {
  AddIdeationResponseDto,
  FetchIdeationResponseDto,
} from "@/ideation/application/dtos/response.dto";
import { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";
import { AddIdeationUsecase } from "@/ideation/application/usecases/add-ideation-usecase";

@injectable()
export class IdeationClientAdapter implements IdeationClientPort {
  constructor(
    @inject(TYPES.FetchIdeationUsecase)
    private readonly fetchIdeationUsecase: FetchIdeationUsecase,

    @inject(TYPES.AddIdeationUsecase)
    private readonly addIdeationUsecase: AddIdeationUsecase,
  ) {}

  async fetchIdeation({
    teamId,
  }: FetchIdeationClientRequestDto): Promise<FetchIdeationResponseDto> {
    return await this.fetchIdeationUsecase.execute({ teamId });
  }

  async addIdeation({
    teamId,
    title,
    description,
    vision,
  }: AddIdeationClientRequestDto): Promise<AddIdeationResponseDto> {
    return await this.addIdeationUsecase.execute({
      teamId,
      title,
      description,
      vision,
    });
  }
}
