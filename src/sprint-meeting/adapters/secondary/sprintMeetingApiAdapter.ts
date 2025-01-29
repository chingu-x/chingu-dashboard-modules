import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import { FetchMeetingResponseDto } from "@/sprint-meeting/application/dtos/response.dto";
import { FetchMeetingRequestDto } from "@/sprint-meeting/application/dtos/request.dto";
import SprintMeetingUrls from "@/sprint-meeting/application/constants/sprintMeetingUrls";

@injectable()
export class SprintMeetingApiAdapter implements SprintMeetingApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort
  ) {}

  async fetchMeeting({
    meetingId,
  }: FetchMeetingRequestDto): Promise<FetchMeetingResponseDto> {
    return await this.apiClient.get({
      url: SprintMeetingUrls.fetchMeeting(meetingId.toString()),
    });
  }
}
