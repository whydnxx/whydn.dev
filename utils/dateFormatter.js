import { parseISO, format } from "date-fns";
import PropTypes from "prop-types";

export default function DateFormatter(dateString) {
  const date = parseISO(dateString);
  return <time dateTime={date}>{format(date, "LLLL d, yyyy")}</time>;
}

DateFormatter.propTypes = {
  dateString: PropTypes.string.isRequired,
};
