import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.tableTypeCell}>{type}</td>
      <td className={css.tableAmountCell}>{amount}</td>
      <td className={css.tableCurrencyCell}>{currency}</td>
    </>
  );
};

export default TransactionItem;

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
