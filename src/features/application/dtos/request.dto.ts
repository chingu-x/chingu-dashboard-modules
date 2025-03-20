// client
export interface FetchFeaturesClientRequestDto {
  teamId: string;
}

export interface AddFeatureClientRequestDto {
  teamId: string;
  description: string;
  featureCategoryId: number;
}

export interface EditFeatureClientRequestDto {
  featureId: number;
  teamMemberId: number;
  description: string;
}

export interface FetchFeatureClientRequestDto {
  featureId: number;
}

// api
export interface FetchFeaturesApiRequestDto {
  teamId: string;
}

export interface AddFeatureApiRequestDto {
  teamId: string;
  description: string;
  featureCategoryId: number;
}

export interface EditFeatureApiRequestDto {
  featureId: number;
  teamMemberId: number;
  description: string;
}

export interface FetchFeatureApiRequestDto {
  featureId: number;
}
