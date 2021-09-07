import PropTypes from "prop-types";

const Statistics = ({
  title,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul style={{ listStyle: "none" }}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {countTotalFeedback()}</li>
        <li>Positive feedback: {countPositiveFeedbackPercentage()}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
