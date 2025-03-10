import type { Sprint } from "@/sprints/application/types";

export interface Meeting {
  id: number;
  sprint?: Sprint;
  title?: string;
  description?: string;
  dateTime?: string;
  meetingLink?: string;
  notes?: string;
  agendas?: Agenda[];
  formResponseMeeting?: Section[];
}

export interface Section {
  id: number;
  form: {
    id: number;
    title: string;
  };
  responseGroup: {
    responses: {
      question: {
        id: number;
      };
      text: string;
    }[];
  };
}

export interface SectionBody {
  responses: {
    questionId: number;
    optionChoiceId?: number;
    text?: string;
    boolean?: boolean;
    numeric?: number;
    responseGroupId?: number;
  }[];
}

export interface Agenda {
  id: number;
  teamMeetingId: number;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MeetingFormData {
  title: string;
  description: string;
  dateTime: string | Date;
  meetingLink: string;
  notes?: string;
}

export interface SprintReviewQuestions {
  what_right: string;
  what_to_improve: string;
  what_to_change: string;
}

export interface SprintPlanningQuestions {
  goal: string;
  timeline: string;
}

export interface SprintMeetingForm {
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
