import { injectable } from "tsyringe";
import { GetVoyageProjectSubmissionStatusResponseDto } from "@/voyage-team/application/dtos/response.dto";
import { GetVoyageProjectSubmissionStatusRequestDto } from "@/voyage-team/application/dtos/request.dto";

@injectable()
export class GetVoyageProjectSubmissionStatusUsecase {
  execute(
    props: GetVoyageProjectSubmissionStatusRequestDto | undefined,
  ): GetVoyageProjectSubmissionStatusResponseDto | undefined {
    return props?.voyageTeam.projectSubmitted;
  }
}
