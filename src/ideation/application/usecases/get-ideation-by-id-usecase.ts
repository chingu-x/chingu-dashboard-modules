import { injectable } from "tsyringe";
import { GetIdeationByIdUsecaseDto } from "@/ideation/application/dtos/usecase.dto";
import { GetIdeationByIdResponseDto } from "@/ideation/application/dtos/response.dto";

@injectable()
export class GetIdeationByIdUsecase {
  execute({
    ideation,
    ideationId,
  }: GetIdeationByIdUsecaseDto): GetIdeationByIdResponseDto {
    return ideation.find((el) => el.id === ideationId)!;
  }
}
