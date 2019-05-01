import React from 'react';
import PropTypes from 'prop-types';
import style from './error.module.css';

const Error = ({ errProp }) => {
  return <span className={style.error}>{errProp}</span>;
};

Error.propTypes = {
  errProp: PropTypes.string.isRequired,
};
export default Error;
