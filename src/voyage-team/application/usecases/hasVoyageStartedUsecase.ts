import { inject, injectable } from "tsyringe";
import { HasVoyageStartedUsecaseDto } from "@/voyage-team/application/dtos/usecase.dto";
import { HasVoyageStartedResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { TYPES } from "@/types";
import { GetChinguMemberStatusUsecase } from "@/user/application/usecases/getChinguMemberStatusUsecase";

@injectable()
export class HasVoyageStartedUsecase {
  constructor(
    @inject(TYPES.GetChinguMemberStatusUsecase)
    private readonly getChinguMemberStatusUsecase: GetChinguMemberStatusUsecase,
  ) {}
  execute({
    isAuthenticated,
    user,
  }: HasVoyageStartedUsecaseDto): HasVoyageStartedResponseDto {
    const activeChingu = this.getChinguMemberStatusUsecase.execute({ user });
    return isAuthenticated && activeChingu;
  }
}
