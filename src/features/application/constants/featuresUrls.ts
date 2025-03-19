interface FetchFeaturesUrlProps {
  teamId: string;
}

interface AddFeatureUrlProps {
  teamId: string;
}

const FeaturesUrls = {
  fetchFeatures({ teamId }: FetchFeaturesUrlProps) {
    return `api/v1/voyages/teams/${teamId}/features`;
  },
  addFeature({ teamId }: AddFeatureUrlProps) {
    return `api/v1/voyages/teams/${teamId}/features`;
  },
} as const;

export default FeaturesUrls;
