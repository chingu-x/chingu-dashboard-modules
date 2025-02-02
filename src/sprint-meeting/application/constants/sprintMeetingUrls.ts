const SprintMeetingUrls = {
  fetchMeeting(meetingId: string) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}`;
  },
  addMeeting(sprintNumber: string, teamId: string) {
    return `/api/v1/voyages/sprints/${sprintNumber}/teams/${teamId}/meetings`;
  },
} as const;

export default SprintMeetingUrls;
