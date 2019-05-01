import React from 'react';
import PropTypes from 'prop-types';
import styles from './controls.module.css';

const Controls = ({ value, length, handleDecrement, handleIncrement }) => (
  <section className={styles.controls}>
    <button
      type="button"
      disabled={!(value > 0)}
      onClick={handleDecrement}
      className={styles.button}
    >
      Назад
    </button>
    <button
      type="button"
      disabled={!(value + 1 < length)}
      onClick={handleIncrement}
      className={styles.button}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  value: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};

export default Controls;
