import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationClientPort } from "@/ideation/ports/primary/ideation-client-port";
import {
  AddIdeationClientRequestDto,
  DeleteIdeationClientRequestDto,
  EditIdeationClientRequestDto,
  FetchIdeationClientRequestDto,
} from "@/ideation/application/dtos/request.dto";
import {
  AddIdeationResponseDto,
  DeleteIdeationResponseDto,
  EditIdeationResponseDto,
  FetchIdeationResponseDto,
} from "@/ideation/application/dtos/response.dto";
import { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";
import { AddIdeationUsecase } from "@/ideation/application/usecases/add-ideation-usecase";
import { EditIdeationUsecase } from "@/ideation/application/usecases/edit-ideation-usecase";

@injectable()
export class IdeationClientAdapter implements IdeationClientPort {
  constructor(
    @inject(TYPES.FetchIdeationUsecase)
    private readonly fetchIdeationUsecase: FetchIdeationUsecase,

    @inject(TYPES.AddIdeationUsecase)
    private readonly addIdeationUsecase: AddIdeationUsecase,

    @inject(TYPES.EditIdeationUsecase)
    private readonly editIdeationUsecase: EditIdeationUsecase,

    @inject(TYPES.DeleteIdeationUsecase)
    private readonly deleteIdeationUsecase: DeleteIdeationUsecase,
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

  async editIdeation({
    ideationId,
    title,
    description,
    vision,
  }: EditIdeationClientRequestDto): Promise<EditIdeationResponseDto> {
    return await this.editIdeationUsecase.execute({
      ideationId,
      title,
      description,
      vision,
    });
  }

  async deleteIdeation({
    ideationId,
  }: DeleteIdeationClientRequestDto): Promise<DeleteIdeationResponseDto> {
    return await this.deleteIdeationUsecase.execute({
      ideationId,
    });
  }
}
