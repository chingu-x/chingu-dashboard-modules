export type Event = {
  title: string;
  date: string;
  link: string;
  sprint: number;
};

export interface CalendarEvent {
  id: number;
  check: boolean;
  label?: string;
  showRocket?: boolean;
  showDot?: boolean;
  link?: string;
  isDisabled?: boolean;
  meeting?: Event;
}
