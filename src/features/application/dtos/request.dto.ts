// client
export interface FetchFeaturesClientRequestDto {
  teamId: string;
}

export interface AddFeatureClientRequestDto {
  teamId: string;
  description: string;
  featureCategoryId: number;
}

// api
export interface FetchFeaturesApiRequestDto {
  teamId: string;
}
