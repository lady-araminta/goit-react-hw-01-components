import PropTypes from 'prop-types';
export const Stat = ({ title, stats }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Stat.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
