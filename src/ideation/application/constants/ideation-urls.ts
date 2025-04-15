interface FetchIdeationUrlProps {
  teamId: string;
}

interface AddIdeationUrlProps {
  teamId: string;
}

interface EditIdeationUrlProps {
  ideationId: number;
}

const IdeationUrls = {
  fetchIdeation({ teamId }: FetchIdeationUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/ideations`;
  },
  addIdeation({ teamId }: AddIdeationUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/ideations`;
  },
  editIdeation({ ideationId }: EditIdeationUrlProps) {
    return `/api/v1/voyages/ideations/${ideationId}`;
  },
} as const;

export default IdeationUrls;
