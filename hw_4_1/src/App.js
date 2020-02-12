import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import MoviesDetailsPage from './pages/MoviesDetails/MoviesDetails';
import ROUTES from './routes';

class App extends Component {
  state = {
    data: {},
  };

  render() {


    return (
      <>
        <header>
          <NavLink to={ROUTES.HOME} >Home</NavLink>
          <NavLink to={ROUTES.MOVIES} >Movies</NavLink>
        </header>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.MOVIES_DETAILS} component={MoviesDetailsPage} />
      </>
    );
  }
}

export default App;
