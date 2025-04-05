import { injectable } from "tsyringe";
import { Forms } from "@/forms/application/types";
import { FetchSubmitVoyageProjectFormResponseDto } from "@/forms/application/dtos/response.dto";
import { FetchSubmitVoyageProjectFormUsecaseDto } from "@/forms/application/dtos/usecase.dto";

@injectable()
export class FetchSubmitVoyageProjectFormUsecase {
  async execute({
    fetchFormQuestions,
  }: FetchSubmitVoyageProjectFormUsecaseDto): Promise<FetchSubmitVoyageProjectFormResponseDto> {
    return await fetchFormQuestions({
      formId: Forms.submitProject,
    });
  }
}
