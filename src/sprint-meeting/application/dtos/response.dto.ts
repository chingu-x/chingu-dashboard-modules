import type {
  Agenda,
  Meeting,
  SprintPlanningQuestions,
  SprintReviewQuestions,
} from "@/sprint-meeting/application/types";

export type FetchMeetingResponseDto = Meeting;
export type GetSprintMeetingIdResponseDto = number | undefined;
export type GetSprintMeetingResponseDto = Meeting;

export interface AddMeetingResponseDto {
  id: number;
  sprintId: number;
  voyageTeamId: string;
  title: string;
  description: string;
  dateTime: string;
  meetingLink?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EditMeetingResponseDto {
  id: number;
  sprintId: number;
  voyageTeamId: number;
  title: string;
  description: string;
  dateTime: string;
  meetingLink: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface AddAgendaTopicResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EditAgendaTopicResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteAgendaTopicResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ChangeAgendaTopicStatusResponseDto {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AddSprintMeetingSectionResponseDto {
  id: number;
  formId: number;
  meetingId: number;
  responseGroupId: number;
  createdAt: string;
  updatedAt: string;
}

export type EditSprintMeetingSectionResponseDto = {
  id: number;
  questionId: number;
  optionChoiceId: number;
  numeric: number;
  boolean: boolean;
  text: string;
  responseGroupId: number;
  createdAt: string;
  updatedAt: string;
}[];

export type GetAgendaByIdResponseDto = Agenda;

export type GetSprintReviewQuestionsResponseDto = SprintReviewQuestions;

export type GetSprintPlanningQuestionsResponseDto = SprintPlanningQuestions;

export type GetIncompleteTopicsResponseDto = Agenda[];

export type GetCompletedTopicsResponseDto = Agenda[];

export interface FetchSprintMeetingFormResponseDto {
  id: number;
  formType: {
    id: number;
    name: string;
  };
  title: string;
  description: string;
  questions: {
    id: number;
    order: number;
    inputType: {
      id: number;
      name: string;
    };
    text: string;
    description: string;
    answerRequired: boolean;
    multipleAllowed: boolean;
    optionGroup: number;
    responses: [
      {
        optionChoice: number;
        numberic: number;
        boolean: boolean;
        text: string;
      },
    ];
  }[];
}

export interface GetSprintMeetingSectionResponsesResponseDto {
  responses: {
    question: {
      id: number;
    };
    text: string;
  }[];
}
