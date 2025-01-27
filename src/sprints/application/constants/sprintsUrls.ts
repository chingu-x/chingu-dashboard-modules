const SprintsUrls = {
  fetchSprints(teamId: string) {
    return `api/v1/voyages/sprints/teams/${teamId}`;
  },
} as const;

export default SprintsUrls;
