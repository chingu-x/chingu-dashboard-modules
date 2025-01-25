const MyTeamUrls = {
  getMyTeam(teamId: string) {
    return `/api/v1/teams/${teamId}`;
  },
  editHours(teamId: string) {
    return `/api/v1/teams/${teamId}/members`;
  },
} as const;

export default MyTeamUrls;
