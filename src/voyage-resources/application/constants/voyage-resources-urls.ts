interface FetchVoyageResourcesProps {
  teamId: string;
}

interface AddVoyageResourceProps {
  teamId: string;
}

interface DeleteVoyageResourceProps {
  resourceId: number;
}

const VoyageResourcesUrls = {
  fetchVoyageResources({ teamId }: FetchVoyageResourcesProps) {
    return `api/v1/voyages/teams/${teamId}`;
  },
  addVoyageResource({ teamId }: AddVoyageResourceProps) {
    return `api/v1/voyages/teams/${teamId}`;
  },
  deleteVoyageResource({ resourceId }: DeleteVoyageResourceProps) {
    return `api/v1/voyages/resources/${resourceId}`;
  },
} as const;

export default VoyageResourcesUrls;
