interface FetchTechStackUrlProps {
  teamId: string;
}

interface AddTechStackItemUrlProps {
  teamId: string;
}

interface EditTechStackItemUrlProps {
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
} as const;

export default TechStackUrls;
