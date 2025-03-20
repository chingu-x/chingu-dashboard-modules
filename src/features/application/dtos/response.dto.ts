import type {
  Category,
  Features,
  VoyageMember,
} from "@/features/application/types";

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

export interface EditFeatureClientResponseDto {
  id: number;
  teamMemberId: number;
  featureCategoryId: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface FetchFeatureClientResponseDto {
  id: number;
  description: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  teamMemberId: number;
  category: Category;
  addedBy: {
    member: VoyageMember;
  };
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

export interface EditFeatureApiResponseDto {
  id: number;
  teamMemberId: number;
  featureCategoryId: number;
  description: string;
  order: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface FetchFeatureApiResponseDto {
  id: number;
  description: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  teamMemberId: number;
  category: Category;
  addedBy: {
    member: VoyageMember;
  };
}

export interface DeleteFeatureApiResponseDto {
  message: string;
  status: number;
}
