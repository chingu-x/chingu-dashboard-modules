import { injectable } from "tsyringe";

@injectable()
export class IsCurrentSprintUsecase {
  execute({
    user,
    sprintNum,
  }: IsCurrentSprintApiRequestDto): IsCurrentSprintResponseDto {
    return Boolean(
      user.sprintCheckIn.find((sprintNumber) => sprintNumber === sprintNum)
    );
  }
}
