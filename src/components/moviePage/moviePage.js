import React, { Component } from 'react';
import MovieCard from './movieCardMaker/movieCard';
import SearchBar from './searchbar/SearchBar';
import styles from './movie.module.css';

function currentFilmsChange(films, value) {
  const currentFilms = films.filter(film =>
    film.title.toLowerCase().includes(value.toLowerCase()),
  );
  return currentFilms;
}

export default class MoviePage extends Component {
  constructor(filmData) {
    super();
    this.films = filmData.filmData;
    this.state = {
      value: '',
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    const currentFilms =
      value === '' ? this.films : currentFilmsChange(this.films, value);
    return (
      <div className={styles.container}>
        <SearchBar value={value} onChange={this.handleChange} />
        <div className={styles.movieGrid}>
          {currentFilms.length > 0 ? (
            currentFilms.map(film => {
              return <MovieCard key={film.id} film={film} />;
            })
          ) : (
            <p style={{ fontSize: 32 }}>No matching results!</p>
          )}
        </div>
      </div>
    );
  }
}
