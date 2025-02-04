interface FetchMeetingUrlProps {
  meetingId: number;
}

interface AddMeetingUrlProps {
  sprintNumber: string;
  teamId: string;
}

const SprintMeetingUrls = {
  fetchMeeting({ meetingId }: FetchMeetingUrlProps) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}`;
  },
  addMeeting({ sprintNumber, teamId }: AddMeetingUrlProps) {
    return `/api/v1/voyages/sprints/${sprintNumber}/teams/${teamId}/meetings`;
  },
} as const;

export default SprintMeetingUrls;
