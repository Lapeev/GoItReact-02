import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Error from '../error/onError';
import style from './controls.module.css';

const Controls = ({
  value,
  handleChange,
  isEmpty,
  isBigger,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <Fragment>
      <input
        className={style.input}
        value={value}
        onChange={handleChange}
        type="number"
      />
      {isEmpty === true && (
        <Error errProp="Введите сумму для проведения операции!" />
      )}
      {isBigger === true && (
        <Error errProp="На счету недостаточно средств для проведения операции!" />
      )}
      <button className={style.button} type="button" onClick={handleIncrement}>
        Deposit
      </button>
      <button className={style.button} type="button" onClick={handleDecrement}>
        Withdraw
      </button>
    </Fragment>
  );
};

Controls.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  isBigger: PropTypes.bool.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};
export default Controls;
