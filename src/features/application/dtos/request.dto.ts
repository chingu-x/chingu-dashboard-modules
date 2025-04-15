import type { Feature } from "@/features/application/types";

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

export interface DeleteFeatureClientRequestDto {
  featureId: number;
}

export interface SaveOrderClientRequestDto {
  featureId: number;
  order: number;
  featureCategoryId: number;
}

export interface IsFeatureOwnerClientRequestDto {
  userId: string;
  addedById: string;
}

export interface GetMustHaveFeaturesClientRequestDto {
  features: Feature[];
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

export interface DeleteFeatureApiRequestDto {
  featureId: number;
}

export interface SaveOrderApiRequestDto {
  featureId: number;
  order: number;
  featureCategoryId: number;
}
