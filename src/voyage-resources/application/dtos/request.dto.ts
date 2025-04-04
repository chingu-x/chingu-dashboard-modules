// client
export interface FetchVoyageResourcesClientRequestDto {
  teamId: string;
}

export interface AddVoyageResourceClientRequestDto {
  teamId: string;
  url: string;
  title: string;
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
