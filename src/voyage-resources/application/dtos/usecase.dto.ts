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
