export interface FetchFeaturesUsecaseDto {
  teamId: string;
}

export interface AddFeatureUsecaseDto {
  teamId: string;
  description: string;
  featureCategoryId: number;
}

export interface EditFeatureUsecaseDto {
  featureId: number;
  teamMemberId: number;
  description: string;
}

export interface FetchFeatureUsecaseDto {
  featureId: number;
}
