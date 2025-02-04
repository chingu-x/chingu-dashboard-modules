import { inject, injectable } from "tsyringe";
import { TYPES } from "@/types";
import { SprintMeetingApiPort } from "@/sprint-meeting/ports/secondary/sprintMeetingApiPort";
import { RestApiPort } from "@/rest-api/ports/secondary/restApiPort";
import {
  AddMeetingResponseDto,
  FetchMeetingResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";
import {
  AddMeetingApiRequestDto,
  FetchMeetingApiRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import SprintMeetingUrls from "@/sprint-meeting/application/constants/sprintMeetingUrls";

@injectable()
export class SprintMeetingApiAdapter implements SprintMeetingApiPort {
  constructor(
    @inject(TYPES.RestApiPort)
    private readonly apiClient: RestApiPort,
  ) {}

  async fetchMeeting({
    meetingId,
  }: FetchMeetingApiRequestDto): Promise<FetchMeetingResponseDto> {
    return await this.apiClient.get({
      url: SprintMeetingUrls.fetchMeeting({ meetingId }),
    });
  }

  async addMeeting({
    teamId,
    sprintNumber,
    title,
    description,
    dateTime,
    meetingLink,
  }: AddMeetingApiRequestDto): Promise<AddMeetingResponseDto> {
    return await this.apiClient.post({
      url: SprintMeetingUrls.addMeeting({ sprintNumber, teamId }),
      payload: { title, description, dateTime, meetingLink },
    });
  }
}
