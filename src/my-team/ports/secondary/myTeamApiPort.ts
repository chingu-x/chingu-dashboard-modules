export interface MyTeamApiPort {
  getMyTeam: () => Promise<GetMyTeamResponseDto>;
  editHours: ({
    teamId,
    hrPerSprint,
  }: EditHoursRequestDto) => Promise<EditHoursResponseDto>;
}
