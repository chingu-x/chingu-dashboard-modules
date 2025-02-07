interface FetchMeetingUrlProps {
  meetingId: string;
}

interface AddMeetingUrlProps {
  sprintNumber: string;
  teamId: string;
}

interface EditMeetingUrlProps {
  meetingId: string;
}

interface AddAgendaTopicUrlProps {
  meetingId: string;
}

interface EditAgendaTopicUrlProps {
  agendaId: string;
}

interface DeleteAgendaTopicUrlProps {
  agendaId: string;
}

interface ChangeAgendaTopicStatusUrlProps {
  agendaId: string;
}

const SprintMeetingUrls = {
  fetchMeeting({ meetingId }: FetchMeetingUrlProps) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}`;
  },
  addMeeting({ sprintNumber, teamId }: AddMeetingUrlProps) {
    return `/api/v1/voyages/sprints/${sprintNumber}/teams/${teamId}/meetings`;
  },
  editMeeting({ meetingId }: EditMeetingUrlProps) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}`;
  },
  addAgendaTopic({ meetingId }: AddAgendaTopicUrlProps) {
    return `/api/v1/voyages/sprints/meetings/${meetingId}/agendas`;
  },
  editAgendaTopic({ agendaId }: EditAgendaTopicUrlProps) {
    return `/api/v1/voyages/sprints/agendas/${agendaId}`;
  },
  deleteAgendaTopic({ agendaId }: DeleteAgendaTopicUrlProps) {
    return `/api/v1/voyages/sprints/agendas/${agendaId}`;
  },
  changeAgendaTopicStatus({ agendaId }: ChangeAgendaTopicStatusUrlProps) {
    return `/api/v1/voyages/sprints/agendas/${agendaId}`;
  },
} as const;

export default SprintMeetingUrls;
