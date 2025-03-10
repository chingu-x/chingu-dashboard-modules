export interface LoginUsecaseDto {
  email: string;
  password: string;
}

export interface RequestResetPasswordUsecaseDto {
  email: string;
}

export interface ResetPasswordUsecaseDto {
  password: string;
  token: string;
}
