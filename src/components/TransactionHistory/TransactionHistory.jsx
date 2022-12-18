import { default as PropTypes } from 'prop-types';
import {
  TableHeading,
  Transactions,
  TransactionRow,
  TransactionData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <thead>
        <tr>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </tr>
      </thead>

      {items ? (
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <TransactionRow key={id}>
                <TransactionData>{type}</TransactionData>
                <TransactionData>{amount}</TransactionData>
                <TransactionData>{currency}</TransactionData>
              </TransactionRow>
            );
          })}
        </tbody>
      ) : (
        ''
      )}
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  })),
};
