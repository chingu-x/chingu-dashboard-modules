import { getTimezone } from "@/user/application/utils/getTimezone";
import { type MyTeam } from "@/my-team/application/types";

export function updateDirectoryWithCurrentTime(data: MyTeam) {
  return data.voyageTeamMembers.forEach((teamMember) => {
    const { timezone } = teamMember.member;
    const currentTime = getTimezone(timezone);
    teamMember.member.currentTime = currentTime;
  });
}
