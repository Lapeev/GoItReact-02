import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ type, amount, date }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}$</td>
    <td>{date}</td>
  </tr>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Transaction;
