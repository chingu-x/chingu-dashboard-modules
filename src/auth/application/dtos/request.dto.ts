// client
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

// api
export interface LoginApiRequestDto {
  email: string;
  password: string;
}

export interface RequestResetPasswordApiRequestDto {
  email: string;
}

export interface ResetPasswordApiRequestDto {
  password: string;
  token: string;
}
