interface FetchSprintsUrlProps {
  teamId: string;
}

const SprintsUrls = {
  fetchSprints({ teamId }: FetchSprintsUrlProps) {
    return `api/v1/voyages/sprints/teams/${teamId}`;
  },
} as const;

export default SprintsUrls;
