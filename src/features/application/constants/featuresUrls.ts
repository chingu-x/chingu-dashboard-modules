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

interface DeleteFeatureUrlProps {
  featureId: number;
}

interface SaveOrderUrlProps {
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
  deleteFeature({ featureId }: DeleteFeatureUrlProps) {
    return `/api/v1/voyages/features/${featureId}`;
  },
  saveOrder({ featureId }: SaveOrderUrlProps) {
    return `/api/v1/voyages/features/${featureId}/reorder`;
  },
} as const;

export default FeaturesUrls;
