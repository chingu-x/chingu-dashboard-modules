interface FetchIdeationUrlProps {
  teamId: string;
}

const IdeationUrls = {
  fetchIdeation({ teamId }: FetchIdeationUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/ideations`;
  },
} as const;

export default IdeationUrls;
