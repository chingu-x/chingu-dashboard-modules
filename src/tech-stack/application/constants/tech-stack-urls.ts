interface FetchTechStackUrlProps {
  teamId: string;
}

const TechStackUrls = {
  fetchTechStack({ teamId }: FetchTechStackUrlProps) {
    return `/api/v1/voyages/teams/${teamId}/techs`;
  },
} as const;

export default TechStackUrls;
