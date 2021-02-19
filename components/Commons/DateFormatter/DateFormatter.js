import { parseISO, format } from "date-fns";
import PropTypes from "prop-types";

export default function DateFormatter({ dateString }) {
  return (
    <time dateTime={dateString}>
      {format(parseISO(dateString), "MMMM dd, yyyy")}
    </time>
  );
}

DateFormatter.propTypes = {
  dateString: PropTypes.string.isRequired,
};
