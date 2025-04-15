import { injectable } from "tsyringe";
import { HasCurrentUserVoteUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { HasCurrentUserVoteResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class HasCurrentUserVoteUsecase {
  execute({
    ideation,
    user,
  }: HasCurrentUserVoteUsecaseDto): HasCurrentUserVoteResponseDto {
    return ideation.projectIdeaVotes.some(
      (el) => el.votedBy.member.id === user.id,
    );
  }
}
