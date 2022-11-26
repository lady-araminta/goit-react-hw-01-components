import PropTypes from 'prop-types';
import {
  StatCont,
  Title,
  Box,
  StatItem,
  StatLabel,
  Percentage,
} from './Stat.styled';
export const Stat = ({ title, stats }) => {
  return (
    <StatCont>
      {title && <Title>{title.toUpperCase()}</Title>}
      <Box>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </Box>
    </StatCont>
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
