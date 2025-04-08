import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { TechStackClientPort } from "@/tech-stack/ports/primary/tech-stack-client-port";
import {
  AddTechStackItemClientRequestDto,
  AddTechStackItemVoteClientRequestDto,
  DeleteTechStackItemClientRequestDto,
  EditTechStackItemClientRequestDto,
  FetchTechStackClientRequestDto,
  FinalizeTechStackClientRequestDto,
  RemoveTechStackItemVoteClientRequestDto,
} from "@/tech-stack/application/dtos/request.dto";
import {
  AddTechStackItemResponseDto,
  AddTechStackItemVoteResponseDto,
  DeleteTechStackItemResponseDto,
  EditTechStackItemResponseDto,
  FetchTechStackResponseDto,
  FinalizeTechStackResponseDto,
  RemoveTechStackItemVoteResponseDto,
} from "@/tech-stack/application/dtos/response.dto";
import { FetchTechStackUsecase } from "@/tech-stack/application/usecases/fetch-tech-stack-usecase";
import { AddTechStackItemUsecase } from "@/tech-stack/application/usecases/add-tech-stack-item-usecase";
import { EditTechStackItemUsecase } from "@/tech-stack/application/usecases/edit-tech-stack-item-usecase";
import { DeleteTechStackItemUsecase } from "@/tech-stack/application/usecases/delete-tech-stack-item-usecase";
import { AddTechStackItemVoteUsecase } from "@/tech-stack/application/usecases/add-tech-stack-item-vote-usecase";
import { RemoveTechStackItemVoteUsecase } from "@/tech-stack/application/usecases/remove-tech-stack-item-vote-usecase";

@injectable()
export class TechStackClientAdapter implements TechStackClientPort {
  constructor(
    @inject(TYPES.FetchTechStackUsecase)
    private readonly fetchTechStackUsecase: FetchTechStackUsecase,

    @inject(TYPES.AddTechStackItemUsecase)
    private readonly addTechStackItemUsecase: AddTechStackItemUsecase,

    @inject(TYPES.EditTechStackItemUsecase)
    private readonly editTechStackItemUsecase: EditTechStackItemUsecase,

    @inject(TYPES.DeleteTechStackItemUsecase)
    private readonly deleteTechStackItemUsecase: DeleteTechStackItemUsecase,

    @inject(TYPES.AddTechStackItemVoteUsecase)
    private readonly addTechStackItemVoteUsecase: AddTechStackItemVoteUsecase,

    @inject(TYPES.RemoveTechStackItemVoteUsecase)
    private readonly removeTechStackItemVoteUsecase: RemoveTechStackItemVoteUsecase,

    @inject(TYPES.FinalizeTechStackUsecase)
    private readonly finalizeTechStackUsecase: FinalizeTechStackUsecase,
  ) {}

  async fetchTechStack({
    teamId,
  }: FetchTechStackClientRequestDto): Promise<FetchTechStackResponseDto> {
    return await this.fetchTechStackUsecase.execute({ teamId });
  }

  async addTechStackItem({
    teamId,
    techName,
    techCategoryId,
    voyageTeamMemberId,
  }: AddTechStackItemClientRequestDto): Promise<AddTechStackItemResponseDto> {
    return await this.addTechStackItemUsecase.execute({
      teamId,
      techName,
      techCategoryId,
      voyageTeamMemberId,
    });
  }

  async editTechStackItem({
    teamTechItemId,
    techName,
  }: EditTechStackItemClientRequestDto): Promise<EditTechStackItemResponseDto> {
    return await this.editTechStackItemUsecase.execute({
      teamTechItemId,
      techName,
    });
  }

  async deleteTechStackItem({
    teamTechItemId,
  }: DeleteTechStackItemClientRequestDto): Promise<DeleteTechStackItemResponseDto> {
    return await this.deleteTechStackItemUsecase.execute({
      teamTechItemId,
    });
  }

  async addTechStackItemVote({
    teamTechItemId,
  }: AddTechStackItemVoteClientRequestDto): Promise<AddTechStackItemVoteResponseDto> {
    return await this.addTechStackItemVoteUsecase.execute({
      teamTechItemId,
    });
  }

  async removeTechStackItemVote({
    teamTechItemId,
  }: RemoveTechStackItemVoteClientRequestDto): Promise<RemoveTechStackItemVoteResponseDto> {
    return await this.removeTechStackItemVoteUsecase.execute({
      teamTechItemId,
    });
  }

  async finalizeTechStack({
    techId,
  }: FinalizeTechStackClientRequestDto): Promise<FinalizeTechStackResponseDto> {
    return await this.finalizeTechStackUsecase.execute({
      techId,
    });
  }
}
