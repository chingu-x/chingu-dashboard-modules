import type { Meeting } from "@/sprint-meeting/application/types";

export interface VoyageSprint {
  id: number;
  number: string;
  soloProjectDeadline: string;
  certificateIssueDate: string;
  showcasePublishDate: string;
  startDate: string;
  endDate: string;
  sprints: Sprint[];
}

export interface Sprint {
  id: number;
  number: number;
  startDate: string;
  endDate: string;
  teamMeetings: number[];
  teamMeetingsData?: Meeting[];
}
