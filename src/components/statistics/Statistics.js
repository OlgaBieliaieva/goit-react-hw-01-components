import PropTypes from 'prop-types';
import StatItem from './StatItem';
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
