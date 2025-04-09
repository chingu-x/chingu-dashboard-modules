import { injectable } from "tsyringe";
import { CheckIfFinalizedUsecaseDto } from "@/tech-stack/application/dtos/usecase.dto";
import { CheckIfFinalizedResponseDto } from "@/tech-stack/application/dtos/response.dto";

@injectable()
export class CheckIfFinalizedUsecase {
  execute({
    techStack,
  }: CheckIfFinalizedUsecaseDto): CheckIfFinalizedResponseDto {
    return techStack.some((items) =>
      items.teamTechStackItems.some((el) => el.isSelected),
    );
  }
}
