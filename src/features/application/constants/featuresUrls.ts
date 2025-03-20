interface FetchFeaturesUrlProps {
  teamId: string;
}

interface AddFeatureUrlProps {
  teamId: string;
}

interface EditFeatureUrlProps {
  featureId: number;
}

interface FetchFeatureUrlProps {
  featureId: number;
}

const FeaturesUrls = {
  fetchFeatures({ teamId }: FetchFeaturesUrlProps) {
    return `api/v1/voyages/teams/${teamId}/features`;
  },
  addFeature({ teamId }: AddFeatureUrlProps) {
    return `api/v1/voyages/teams/${teamId}/features`;
  },
  editFeature({ featureId }: EditFeatureUrlProps) {
    return `api/v1/voyages/features/${featureId}`;
  },
  fetchFeature({ featureId }: FetchFeatureUrlProps) {
    return `/api/v1/voyages/features/${featureId}`;
  },
} as const;

export default FeaturesUrls;
