import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { IdeationClientPort } from "@/ideation/ports/primary/ideation-client-port";
import {
  AddIdeationClientRequestDto,
  AddIdeationVoteClientRequestDto,
  DeleteIdeationClientRequestDto,
  EditIdeationClientRequestDto,
  FetchIdeationClientRequestDto,
  FinalizeIdeationClientRequestDto,
  GetIdeationByIdClientRequestDto,
  RemoveIdeationVoteClientRequestDto,
} from "@/ideation/application/dtos/request.dto";
import {
  AddIdeationResponseDto,
  AddIdeationVoteResponseDto,
  DeleteIdeationResponseDto,
  EditIdeationResponseDto,
  FetchIdeationResponseDto,
  FinalizeIdeationResponseDto,
  GetIdeationByIdResponseDto,
  RemoveIdeationVoteResponseDto,
} from "@/ideation/application/dtos/response.dto";
import { FetchIdeationUsecase } from "@/ideation/application/usecases/fetch-ideation-usecase";
import { AddIdeationUsecase } from "@/ideation/application/usecases/add-ideation-usecase";
import { EditIdeationUsecase } from "@/ideation/application/usecases/edit-ideation-usecase";
import { DeleteIdeationUsecase } from "@/ideation/application/usecases/delete-ideation-usecase";
import { AddIdeationVoteUsecase } from "@/ideation/application/usecases/add-ideation-vote-usecase";
import { RemoveIdeationVoteUsecase } from "@/ideation/application/usecases/remove-ideation-vote-usecase";
import { FinalizeIdeationUsecase } from "@/ideation/application/usecases/finalize-ideation-usecase";
import { GetIdeationByIdUsecase } from "@/ideation/application/usecases/get-ideation-by-id-usecase";

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

    @inject(TYPES.AddIdeationVoteUsecase)
    private readonly addIdeationVoteUsecase: AddIdeationVoteUsecase,

    @inject(TYPES.RemoveIdeationVoteUsecase)
    private readonly removeIdeationVoteUsecase: RemoveIdeationVoteUsecase,

    @inject(TYPES.FinalizeIdeationUsecase)
    private readonly finalizeIdeationUsecase: FinalizeIdeationUsecase,

    @inject(TYPES.GetIdeationByIdUsecase)
    private readonly getIdeationByIdUsecase: GetIdeationByIdUsecase,
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

  async addIdeationVote({
    ideationId,
  }: AddIdeationVoteClientRequestDto): Promise<AddIdeationVoteResponseDto> {
    return await this.addIdeationVoteUsecase.execute({
      ideationId,
    });
  }

  async removeIdeationVote({
    ideationId,
  }: RemoveIdeationVoteClientRequestDto): Promise<RemoveIdeationVoteResponseDto> {
    return await this.removeIdeationVoteUsecase.execute({
      ideationId,
    });
  }

  async finalizeIdeation({
    teamId,
    ideationId,
  }: FinalizeIdeationClientRequestDto): Promise<FinalizeIdeationResponseDto> {
    return await this.finalizeIdeationUsecase.execute({
      teamId,
      ideationId,
    });
  }

  getIdeationById({
    ideation,
    ideationId,
  }: GetIdeationByIdClientRequestDto): GetIdeationByIdResponseDto {
    return this.getIdeationByIdUsecase.execute({
      ideation,
      ideationId,
    });
  }
}
