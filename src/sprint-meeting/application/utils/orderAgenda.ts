import type { Meeting } from "@/sprint-meeting/application/types";

export function orderAgenda(meeting: Meeting): Meeting {
  return {
    ...meeting,
    agendas: meeting.agendas?.sort((a, b) =>
      a.updatedAt.localeCompare(b.updatedAt),
    ),
  };
}
