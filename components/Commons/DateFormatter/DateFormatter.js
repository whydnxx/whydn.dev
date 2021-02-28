import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString }) {
  return (
    <time dateTime={dateString}>
      {format(parseISO(dateString), "MMMM dd, yyyy")}
    </time>
  );
}
