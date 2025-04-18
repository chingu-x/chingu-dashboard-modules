import type { Feature } from "@/features/application/types";

// client
export type FetchFeaturesClientResponseDto = {
  categoryId: number;
  categoryName: string;
  features: Feature[];
}[];

export interface AddFeatureClientResponseDto {
  id: number;
  teamMemberId: number;
  featureCategoryId: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface EditFeatureClientResponseDto {
  id: number;
  teamMemberId: number;
  featureCategoryId: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface DeleteFeatureClientResponseDto {
  message: string;
  status: number;
}

export type IsFeatureOwnerClientResponseDto = boolean;

export type SaveOrderClientResponseDto = Feature[];

export type GetMustHaveFeaturesResponseDto = Feature["description"][];

// api
export type FetchFeaturesApiResponseDto = Feature[];

export interface AddFeatureApiResponseDto {
  id: number;
  teamMemberId: number;
  featureCategoryId: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface EditFeatureApiResponseDto {
  id: number;
  teamMemberId: number;
  featureCategoryId: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface DeleteFeatureApiResponseDto {
  message: string;
  status: number;
}

export type SaveOrderApiResponseDto = Feature[];
