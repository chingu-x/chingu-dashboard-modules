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
