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

export interface DeleteFeatureUsecaseDto {
  featureId: number;
}

export interface SaveOrderUsecaseDto {
  featureId: number;
  order: number;
  featureCategoryId: number;
}

export interface IsFeatureOwnerUsecaseDto {
  userId: string;
  addedById: string;
}
