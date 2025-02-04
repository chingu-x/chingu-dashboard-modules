interface GetMyTeamUrlProps {
  teamId: string;
}

interface EditHoursUrlProps {
  teamId: string;
}

const MyTeamUrls = {
  getMyTeam({ teamId }: GetMyTeamUrlProps) {
    return `/api/v1/teams/${teamId}`;
  },
  editHours({ teamId }: EditHoursUrlProps) {
    return `/api/v1/teams/${teamId}/members`;
  },
} as const;

export default MyTeamUrls;
