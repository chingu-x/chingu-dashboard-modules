import type { Features } from "@/features/application/types";

// client
export type FetchFeaturesClientResponseDto = {
  categoryId: number;
  categoryName: string;
  features: Features[];
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

// api
export type FetchFeaturesApiResponseDto = Features[];

export interface AddFeatureApiResponseDto {
  id: number;
  teamMemberId: number;
  featureCategoryId: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}
