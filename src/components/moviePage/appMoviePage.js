import React from 'react';
import filmData from './movies.json';
import MoviePage from './moviePage';

const AppMoviePage = () => <MoviePage filmData={filmData} />;

export default AppMoviePage;
