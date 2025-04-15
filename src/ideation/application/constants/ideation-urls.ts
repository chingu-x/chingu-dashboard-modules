interface FetchIdeationUrlProps {
  teamId: string;
}

interface AddIdeationUrlProps {
  teamId: string;
}

const IdeationUrls = {
  fetchIdeation({ teamId }: FetchIdeationUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/ideations`;
  },
  addIdeation({ teamId }: AddIdeationUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/ideations`;
  },
} as const;

export default IdeationUrls;
