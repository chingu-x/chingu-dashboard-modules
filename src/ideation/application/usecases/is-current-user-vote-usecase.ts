import { injectable } from "tsyringe";
import { IsCurrentUserVoteUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { IsCurrentUserVoteResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class IsCurrentUserVoteUsecase {
  execute({
    ideation,
    user,
  }: IsCurrentUserVoteUsecaseDto): IsCurrentUserVoteResponseDto {
    return ideation.contributedBy.member.id === user.id;
  }
}
