import type { Features } from "@/features/application/types";

// client
export type FetchFeaturesClientResponseDto = {
  categoryId: number;
  categoryName: string;
  features: Features[];
}[];

// api
export type FetchFeaturesApiResponseDto = Features[];
