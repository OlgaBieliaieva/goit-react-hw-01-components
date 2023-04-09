import PropTypes from 'prop-types';
import StatItem from './StatItem';
import getRandomHexColor from '../../utils/random-color';
import css from './Statistics.module.css';

const Statistics = ({ title, data }) => {
  return (
    <section className={css.statisticsContainer}>
      {title.length > 0 && (
        <h2 className={css.statisticsTitle}>{title.toUpperCase()}</h2>
      )}

      <ul className={css.statisticsList}>
        {data.map(item => (
          <li
            className={css.statisticsListItem}
            style={{ backgroundColor: getRandomHexColor() }}
            key={item.id}
          >
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
