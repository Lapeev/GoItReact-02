import React from 'react';
import PropTypes from 'prop-types';
import styles from './counter.module.css';

const Counter = ({ value, length }) => (
  <p className={styles.counter}>
    {value + 1}/{length}
  </p>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
export default Counter;
