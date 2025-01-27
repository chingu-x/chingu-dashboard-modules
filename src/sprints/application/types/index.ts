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
  }[];
}
