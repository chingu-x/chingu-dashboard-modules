export interface GetRequestDto {
  url: string;
}

export interface PostRequestDto<X> {
  url: string;
  payload?: X;
}

export interface PatchRequestDto<X> {
  url: string;
  payload: X;
}

export interface DeleteRequestDto {
  url: string;
}
