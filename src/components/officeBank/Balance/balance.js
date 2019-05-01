import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './balance.module.css';

const Balance = ({ history, balance }) => {
  return (
    <Fragment>
      <span className={style.change}>
        <span role="img" aria-label="deposit">
          ⬆️
        </span>
        {history.reduce(
          (acc, el) => (el.type === 'deposit' ? acc + Number(el.amount) : acc),
          0,
        )}
        $
      </span>
      <span className={style.change}>
        <span role="img" aria-label="withdraw">
          ⬇️
        </span>
        {history.reduce(
          (acc, el) => (el.type === 'withdraw' ? acc + Number(el.amount) : acc),
          0,
        )}
        $
      </span>
      <span className={style.balance}>Balance: {balance}$</span>
    </Fragment>
  );
};

Balance.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
  balance: PropTypes.number.isRequired,
};
export default Balance;
