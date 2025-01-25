export interface MyTeamApiPort {
  getMyTeam: ({
    teamId,
    user,
  }: GetMyTeamRequestDto) => Promise<GetMyTeamResponseDto>;
  editHours: ({
    teamId,
    hrPerSprint,
  }: EditHoursRequestDto) => Promise<EditHoursResponseDto>;
}
