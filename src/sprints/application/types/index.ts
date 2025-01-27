export interface Sprints {
  id: number;
  number: string;
  soloProjectDeadline: string;
  certificateIssueDate: string;
  showcasePublishDate: string;
  startDate: string;
  endDate: string;
  sprints: {
    id: number;
    number: number;
    startDate: string;
    endDate: string;
    teamMeetings: number[];
    teamMeetingsData?: Meeting[];
  }[];
}

export interface Meeting {
  id: number;
  sprint?: {
    id: number;
    number: number;
  };
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
