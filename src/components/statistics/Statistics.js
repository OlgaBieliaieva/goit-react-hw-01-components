import PropTypes from 'prop-types';
import StatItem from './StatItem';

const Statistics = ({ title, data }) => {
  return (
    <section>
      {title.length > 0 && <h2>{title}</h2>}

      <ul>
        {data.map(item => (
          <li key={item.id}>
            <StatItem type={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
