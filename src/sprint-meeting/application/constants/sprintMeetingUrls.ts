interface FetchMeetingUrlProps {
  meetingId: number;
}

interface AddMeetingUrlProps {
  sprintNumber: string;
  teamId: string;
}

interface AddAgendaTopicUrlProps {
  meetingId: string;
}

interface EditAgendaTopicUrlProps {
  agendaId: string;
}

const SprintMeetingUrls = {
  fetchMeeting({ meetingId }: FetchMeetingUrlProps) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}`;
  },
  addMeeting({ sprintNumber, teamId }: AddMeetingUrlProps) {
    return `/api/v1/voyages/sprints/${sprintNumber}/teams/${teamId}/meetings`;
  },
  addAgendaTopic({ meetingId }: AddAgendaTopicUrlProps) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}/agendas`;
  },
  editAgendaTopic({ agendaId }: EditAgendaTopicUrlProps) {
    return `/api/v1/voyages/sprints/agendas/${agendaId}`;
  },
} as const;

export default SprintMeetingUrls;
