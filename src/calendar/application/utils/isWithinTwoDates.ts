import { isSameDay } from "date-fns";

interface IsWithinTwoDatesProps {
  currentDate: Date;
  startDate: Date | string;
  endDate: Date | string;
}

export function isWithinTwoDates({
  currentDate,
  startDate,
  endDate,
}: IsWithinTwoDatesProps) {
  return (
    (isSameDay(currentDate, startDate) || currentDate >= startDate) &&
    (isSameDay(currentDate, endDate) || currentDate <= endDate)
  );
}
