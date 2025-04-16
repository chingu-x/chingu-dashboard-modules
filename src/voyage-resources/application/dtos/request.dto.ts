import type {
  SortOption,
  VoyageResource,
} from "@/voyage-resources/application/types";

// client
export interface FetchVoyageResourcesClientRequestDto {
  teamId: string;
}

export interface AddVoyageResourceClientRequestDto {
  teamId: string;
  url: string;
  title: string;
}

export interface DeleteVoyageResourceClientRequestDto {
  resourceId: number;
}

export interface SortVoyageResourcesClientRequestDto {
  order: SortOption;
  voyageResources: VoyageResource[];
}

export interface GetTopFiveResourcesClientRequestDto {
  voyageResources: VoyageResource[];
}

// api
export interface FetchVoyageResourcesApiRequestDto {
  teamId: string;
}

export interface AddVoyageResourceApiRequestDto {
  teamId: string;
  url: string;
  title: string;
}

export interface DeleteVoyageResourceApiRequestDto {
  resourceId: number;
}
