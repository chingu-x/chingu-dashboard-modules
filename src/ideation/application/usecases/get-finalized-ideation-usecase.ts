import { injectable } from "tsyringe";
import { GetFinalizedIdeationUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { GetFinalizedIdeationResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class GetFinalizedIdeationUsecase {
  execute({
    ideation,
  }: GetFinalizedIdeationUsecaseDto): GetFinalizedIdeationResponseDto {
    return ideation.find((project) => project.isSelected === true);
  }
}
