import React from "react";
import PropTypes from "prop-types";

const Score = (score, size, color) => (
  <span className={"score score--" + size} style={{ color }}>
    {score === null ? "null" : score}
  </span>
);

Score.propTypes = {
  score: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
};

Score.defaultProps = {
  score: null,
  size: "l",
  color: "#1d1d1f"
};

export default Score;
