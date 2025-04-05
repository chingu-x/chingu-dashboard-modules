interface FetchMyTeamUrlProps {
  teamId: string;
}

interface EditHoursUrlProps {
  teamId: string;
}

const MyTeamUrls = {
  fetchMyTeam({ teamId }: FetchMyTeamUrlProps) {
    return `/api/v1/teams/${teamId}`;
  },
  editHours({ teamId }: EditHoursUrlProps) {
    return `/api/v1/teams/${teamId}/members`;
  },
} as const;

export default MyTeamUrls;
