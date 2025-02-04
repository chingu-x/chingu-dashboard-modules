interface GetMyTeamUrlProps {
  teamId: number;
}

interface EditHoursUrlProps {
  teamId: number;
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
