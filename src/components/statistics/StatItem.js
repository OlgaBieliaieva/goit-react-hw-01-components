import PropTypes from 'prop-types';

const StatItem = ({ type, percentage = 0 }) => {
  return (
    <>
      <span>.{type}</span>
      <span>{percentage}%</span>
    </>
  );
};

export default StatItem;

StatItem.propTypes = {
  type: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
