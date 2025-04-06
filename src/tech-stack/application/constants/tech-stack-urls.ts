interface FetchTechStackUrlProps {
  teamId: string;
}

interface AddTechStackItemUrlProps {
  teamId: string;
}

const TechStackUrls = {
  fetchTechStack({ teamId }: FetchTechStackUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/techs`;
  },
  addTechStackItem({ teamId }: AddTechStackItemUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/techs`;
  },
} as const;

export default TechStackUrls;
