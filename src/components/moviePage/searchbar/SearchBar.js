import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchBar.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    value={value}
    onChange={onChange}
    type="text"
    className={styles.searchBar}
  />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBar;
