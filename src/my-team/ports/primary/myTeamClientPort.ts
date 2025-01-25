export interface MyTeamClientPort {
  logout: () => Promise<GetMyTeamResponseDto>;
  requestResetPassword: (
    props: EditHoursRequestDto,
  ) => Promise<EditHoursResponseDto>;
}
