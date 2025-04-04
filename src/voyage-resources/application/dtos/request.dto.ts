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
  teamId: string;
  resourceId: number;
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
