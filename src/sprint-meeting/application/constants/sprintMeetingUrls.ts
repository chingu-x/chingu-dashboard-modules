const SprintMeetingUrls = {
  fetchMeeting(meetingId: string) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}`;
  },
} as const;

export default SprintMeetingUrls;
