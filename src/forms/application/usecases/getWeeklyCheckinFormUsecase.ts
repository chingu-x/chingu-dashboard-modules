import { injectable } from "tsyringe";
import { GetWeeklyCheckinFormRequestDto } from "@/forms/application/dtos/request.dto";
import { GetWeeklyCheckinFormResponseDto } from "@/forms/application/dtos/response.dto";

@injectable()
export class GetWeeklyCheckinFormUsecase {
  execute(
    props: GetWeeklyCheckinFormRequestDto
  ): GetWeeklyCheckinFormResponseDto {
    return this.formsApi.fetchFormQuestions({
      ...props,
    });
  }
}
