interface FetchIdeationUrlProps {
  teamId: string;
}

interface AddIdeationUrlProps {
  teamId: string;
}

interface EditIdeationUrlProps {
  ideationId: number;
}

interface DeleteIdeationUrlProps {
  ideationId: number;
}

interface AddIdeationVoteUrlProps {
  ideationId: number;
}

interface RemoveIdeationVoteUrlProps {
  ideationId: number;
}

interface FinalizeIdeationUrlProps {
  teamId: string;
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
  deleteIdeation({ ideationId }: DeleteIdeationUrlProps) {
    return `/api/v1/voyages/ideations/${ideationId}`;
  },
  addIdeationVote({ ideationId }: AddIdeationVoteUrlProps) {
    return `/api/v1/voyages/ideations/${ideationId}/ideation-votes`;
  },
  removeIdeationVote({ ideationId }: RemoveIdeationVoteUrlProps) {
    return `/api/v1/voyages/ideations/${ideationId}/ideation-votes`;
  },
  finalizeIdeation({ teamId, ideationId }: FinalizeIdeationUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/ideations/${ideationId}/select`;
  },
} as const;

export default IdeationUrls;
