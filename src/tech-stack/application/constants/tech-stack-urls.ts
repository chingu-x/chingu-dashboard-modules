interface FetchTechStackUrlProps {
  teamId: string;
}

interface AddTechStackItemUrlProps {
  teamId: string;
}

interface EditTechStackItemUrlProps {
  teamTechItemId: number;
}

interface DeleteTechStackItemUrlProps {
  teamTechItemId: number;
}

interface AddTechStackItemVoteUrlProps {
  teamTechItemId: number;
}

const TechStackUrls = {
  fetchTechStack({ teamId }: FetchTechStackUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/techs`;
  },
  addTechStackItem({ teamId }: AddTechStackItemUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/techs`;
  },
  editTechStackItem({ teamTechItemId }: EditTechStackItemUrlProps) {
    return `/api/v1/voyages/techs/${teamTechItemId}`;
  },
  deleteTechStackItem({ teamTechItemId }: DeleteTechStackItemUrlProps) {
    return `/api/v1/voyages/techs/${teamTechItemId}`;
  },
  addTechStackItemVote({ teamTechItemId }: AddTechStackItemVoteUrlProps) {
    return `/api/v1/voyages/techs/${teamTechItemId}/vote`;
  },
} as const;

export default TechStackUrls;
