import { toZonedTime } from "date-fns-tz";

export interface ConvertStringToDateProps {
  dateTime: string;
  timezone: string;
}

// Returns a Date which will format as a specific UTC time or date in the given time zone (a user's timezone).
export default function convertStringToDate({
  dateTime,
  timezone,
}: ConvertStringToDateProps) {
  return toZonedTime(dateTime, timezone);
}
