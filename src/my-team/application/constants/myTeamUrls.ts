interface GetMyTeamProps {
  teamId: number;
}

interface EditHoursProps {
  teamId: number;
}

const MyTeamUrls = {
  getMyTeam({ teamId }: GetMyTeamProps) {
    return `/api/v1/teams/${teamId}`;
  },
  editHours({ teamId }: EditHoursProps) {
    return `/api/v1/teams/${teamId}/members`;
  },
} as const;

export default MyTeamUrls;
