import PropTypes from 'prop-types';
import { TabHead, TableCont, TabRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableCont>
      <thead>
        <tr>
          <TabHead>Type</TabHead>
          <TabHead>Amount</TabHead>
          <TabHead>Currency</TabHead>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TabRow>{type}</TabRow>
            <TabRow>{amount}</TabRow>
            <TabRow>{currency}</TabRow>
          </tr>
        ))}
      </tbody>
    </TableCont>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
