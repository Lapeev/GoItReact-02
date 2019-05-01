import React from 'react';
import AppReader from './components/reader/appReader';
import AppMoviePage from './components/moviePage/appMoviePage';
import AppOffice from './components/officeBank/appOffice';

const App = () => (
  <div>
    <AppReader />
    <AppMoviePage />
    <AppOffice />
  </div>
);

export default App;
