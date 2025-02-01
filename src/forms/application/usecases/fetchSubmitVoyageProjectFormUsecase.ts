import { injectable } from "tsyringe";
import { Forms } from "@/forms/application/types";
import { FetchSubmitVoyageProjectFormResponseDto } from "@/forms/application/dtos/response.dto";
import { FetchSubmitVoyageProjectFormApiRequestDto } from "@/forms/application/dtos/request.dto";

@injectable()
export class FetchSubmitVoyageProjectFormUsecase {
  async execute({
    fetchFormQuestions,
  }: FetchSubmitVoyageProjectFormApiRequestDto): Promise<FetchSubmitVoyageProjectFormResponseDto> {
    return await fetchFormQuestions({
      formId: Forms.submitProject,
    });
  }
}
