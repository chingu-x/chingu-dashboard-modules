import type {
  SortOption,
  VoyageResource,
} from "@/voyage-resources/application/types";

export interface FetchVoyageResourcesUsecaseDto {
  teamId: string;
}

export interface AddVoyageResourceUsecaseDto {
  teamId: string;
  url: string;
  title: string;
}

export interface DeleteVoyageResourceUsecaseDto {
  resourceId: number;
}

export interface SortVoyageResourcesUsecaseDto {
  order: SortOption;
  voyageResources: VoyageResource[];
}

export interface GetTopFiveVoyageResourcesUsecaseDto {
  voyageResources: VoyageResource[];
}
