import type {
  FetchSprintsApiRequestDto,
  SubmitVoyageProjectApiRequestDto,
  SubmitWeeklyCheckinApiRequestDto,
} from "@/sprints/application/dtos/request.dto";
import type {
  FetchAllSprintsResponseDto,
  FetchSprintsResponseDto,
  SubmitVoyageProjectResponseDto,
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

  submitVoyageProject: ({
    voyageTeamId,
    responses,
  }: SubmitVoyageProjectApiRequestDto) => Promise<SubmitVoyageProjectResponseDto>;

  fetchAllSprints: () => Promise<FetchAllSprintsResponseDto>;
}
