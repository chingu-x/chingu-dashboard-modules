interface FetchVoyageResourcesProps {
  teamId: string;
}

const VoyageResourcesUrls = {
  fetchVoyageResources({ teamId }: FetchVoyageResourcesProps) {
    return `api/v1/voyages/teams/${teamId}`;
  },
} as const;

export default VoyageResourcesUrls;
