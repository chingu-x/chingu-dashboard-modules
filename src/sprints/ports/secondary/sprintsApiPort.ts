import type {
  FetchSprintsApiRequestDto,
  SubmitWeeklyCheckinApiRequestDto,
} from "@/sprints/application/dtos/request.dto";
import type {
  FetchSprintsResponseDto,
  SubmitWeeklyCheckinResponseDto,
} from "@/sprints/application/dtos/response.dto";

export interface SprintsApiPort {
  fetchSprints: ({
    teamId,
  }: FetchSprintsApiRequestDto) => Promise<FetchSprintsResponseDto>;

  submitWeeklyCheckin: ({
    voyageTeamMemberId,
    sprintId,
    responses,
  }: SubmitWeeklyCheckinApiRequestDto) => Promise<SubmitWeeklyCheckinResponseDto>;
}
