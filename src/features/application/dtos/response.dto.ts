import type { Features } from "@/features/application/types";

export interface FetchFeaturesResponseDto {
  categoryId: number;
  categoryName: string;
  features: Features[];
}
