export interface LoginClientRequestDto {
  email: string;
  password: string;
}

export interface RequestResetPasswordClientRequestDto {
  email: string;
}

export interface ResetPasswordClientRequestDto {
  password: string;
  token: string;
}

export type LoginApiRequestDto = LoginClientRequestDto;

export type RequestResetPasswordApiRequestDto =
  RequestResetPasswordClientRequestDto;

export type ResetPasswordApiRequestDto = ResetPasswordClientRequestDto;
