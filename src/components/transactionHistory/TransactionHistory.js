import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.tableContainer}>
      <thead className={css.tableHead}>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, i) => {
          return (
            <tr className={getStyle(i)} key={transaction.id}>
              <TransactionItem
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

function getStyle(i) {
  let rowType = css.evenRow;
  if (i % 2 !== 0) {
    rowType = css.oddRow;
  }
  return rowType;
}
