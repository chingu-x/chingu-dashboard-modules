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
  form: {
    id: number;
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

export interface Agenda {
  id: number;
  title: string;
  description: string;
  status: boolean;
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
