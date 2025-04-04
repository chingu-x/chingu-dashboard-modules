interface FetchVoyageResourcesProps {
  teamId: string;
}

interface AddVoyageResourceProps {
  teamId: string;
}

const VoyageResourcesUrls = {
  fetchVoyageResources({ teamId }: FetchVoyageResourcesProps) {
    return `api/v1/voyages/teams/${teamId}`;
  },
  addVoyageResource({ teamId }: AddVoyageResourceProps) {
    return `api/v1/voyages/teams/${teamId}`;
  },
} as const;

export default VoyageResourcesUrls;
