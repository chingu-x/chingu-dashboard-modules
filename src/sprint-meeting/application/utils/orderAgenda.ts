import type { Agenda, Meeting } from "@/sprint-meeting/application/types";

export function orderAgenda({ agendas }: Meeting): Agenda[] {
  return agendas!.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt));
}
