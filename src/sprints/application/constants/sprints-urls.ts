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
  submitVoyageProject() {
    return "/api/v1/voyages/submit-project";
  },
  fetchAllSprints() {
    return "/api/v1/voyages/sprints";
  },
} as const;

export default SprintsUrls;
