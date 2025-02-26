import type {
  AddMeetingClientRequestDto,
  FetchMeetingClientRequestDto,
  GetSprintMeetingIdClientRequesDto,
  GetSprintMeetingClientRequestDto,
  AddAgendaTopicClientRequestDto,
  EditAgendaTopicClientRequestDto,
  DeleteAgendaTopicClientRequestDto,
  EditMeetingClientRequestDto,
  ChangeAgendaTopicStatusClientRequestDto,
  AddSprintMeetingSectionClientRequestDto,
  GetAgendaByIdClientRequestDto,
  GetSprintReviewQuestionsClientRequestDto,
  // EditSprintMeetingSectionClientRequestDto,
} from "@/sprint-meeting/application/dtos/request.dto";
import type {
  AddAgendaTopicResponseDto,
  AddMeetingResponseDto,
  AddSprintMeetingSectionResponseDto,
  ChangeAgendaTopicStatusResponseDto,
  DeleteAgendaTopicResponseDto,
  EditAgendaTopicResponseDto,
  EditMeetingResponseDto,
  // EditSprintMeetingSectionResponseDto,
  FetchMeetingResponseDto,
  GetAgendaByIdResponseDto,
  GetSprintMeetingIdResponseDto,
  GetSprintMeetingResponseDto,
  GetSprintReviewQuestionsResponseDto,
} from "@/sprint-meeting/application/dtos/response.dto";

export interface SprintMeetingClientPort {
  fetchMeeting: (
    props: FetchMeetingClientRequestDto,
  ) => Promise<FetchMeetingResponseDto>;

  getSprintMeetingId: (
    props: GetSprintMeetingIdClientRequesDto,
  ) => GetSprintMeetingIdResponseDto;

  getSprintMeeting: (
    props: GetSprintMeetingClientRequestDto,
  ) => GetSprintMeetingResponseDto | undefined;

  addMeeting: (
    props: AddMeetingClientRequestDto,
  ) => Promise<AddMeetingResponseDto>;

  editMeeting: (
    props: EditMeetingClientRequestDto,
  ) => Promise<EditMeetingResponseDto>;

  addAgendaTopic: (
    props: AddAgendaTopicClientRequestDto,
  ) => Promise<AddAgendaTopicResponseDto>;

  editAgendaTopic: (
    props: EditAgendaTopicClientRequestDto,
  ) => Promise<EditAgendaTopicResponseDto>;

  deleteAgendaTopic: (
    props: DeleteAgendaTopicClientRequestDto,
  ) => Promise<DeleteAgendaTopicResponseDto>;

  changeAgendaTopicStatus: (
    props: ChangeAgendaTopicStatusClientRequestDto,
  ) => Promise<ChangeAgendaTopicStatusResponseDto>;

  addSprintMeetingSection: (
    props: AddSprintMeetingSectionClientRequestDto,
  ) => Promise<AddSprintMeetingSectionResponseDto>;

  getAgendaById: (
    props: GetAgendaByIdClientRequestDto,
  ) => GetAgendaByIdResponseDto;

  getSprintReviewQuestions: (
    props: GetSprintReviewQuestionsClientRequestDto,
  ) => GetSprintReviewQuestionsResponseDto;

  // editSprintMeetingSection: (
  //   props: EditSprintMeetingSectionClientRequestDto,
  // ) => Promise<EditSprintMeetingSectionResponseDto>;

  // editSprintReviewSection: (
  //   props: EditSprintReviewSectionClientRequestDto,
  // ) => Promise<EditSprintReviewSectionResponseDto>;
}
