export interface FetchFeaturesUsecaseDto {
  teamId: string;
}

export interface AddFeatureUsecaseDto {
  teamId: string;
  description: string;
  featureCategoryId: number;
}
