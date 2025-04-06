interface FetchVoyageResourcesUrlProps {
  teamId: string;
}

interface AddVoyageResourceUrlProps {
  teamId: string;
}

interface DeleteVoyageResourceUrlProps {
  resourceId: number;
}

const VoyageResourcesUrls = {
  fetchVoyageResources({ teamId }: FetchVoyageResourcesUrlProps) {
    return `api/v1/voyages/teams/${teamId}`;
  },
  addVoyageResource({ teamId }: AddVoyageResourceUrlProps) {
    return `api/v1/voyages/teams/${teamId}`;
  },
  deleteVoyageResource({ resourceId }: DeleteVoyageResourceUrlProps) {
    return `api/v1/voyages/resources/${resourceId}`;
  },
} as const;

export default VoyageResourcesUrls;
