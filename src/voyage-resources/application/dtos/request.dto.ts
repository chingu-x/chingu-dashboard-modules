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
