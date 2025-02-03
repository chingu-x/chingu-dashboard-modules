import type {
  LoginClientRequestDto,
  RequestResetPasswordClientRequestDto,
  ResetPasswordClientRequestDto,
} from "./request.dto";

export type LoginUsecaseDto = LoginClientRequestDto;

export type RequestResetPasswordUsecaseDto =
  RequestResetPasswordClientRequestDto;

export type ResetPasswordUsecaseDto = ResetPasswordClientRequestDto;
