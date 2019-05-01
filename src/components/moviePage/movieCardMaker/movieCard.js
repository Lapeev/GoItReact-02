import React from 'react';
import PropTypes from 'prop-types';
import styles from './movieCard.module.css';

const MovieCard = ({ film }) => {
  return (
    <div className={styles.movieCard}>
      <img src={film.posterUrl} alt="" />
      <div className={styles.content}>
        <h2>{film.title}</h2>
        <p>{film.overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    posterUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieCard;
