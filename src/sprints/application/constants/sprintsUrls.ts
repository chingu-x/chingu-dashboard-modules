interface FetchSprintsUrlProps {
  teamId: string;
}

const SprintsUrls = {
  fetchSprints({ teamId }: FetchSprintsUrlProps) {
    return `api/v1/voyages/sprints/teams/${teamId}`;
  },
  submitWeeklyCheckin() {
    return "/api/v1/voyages/sprints/check-in";
  },
} as const;

export default SprintsUrls;
