export interface MyTeamClientPort {
  getMyTeam: (props: GetMyTeamRequestDto) => Promise<GetMyTeamResponseDto>;
  editHours: (props: EditHoursRequestDto) => Promise<EditHoursResponseDto>;
}
