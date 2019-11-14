import React from 'react';
import Home from './container/Home/Home';
import Header from './components/Header/Header';
import navs from './components/Header/navs.json';

console.log('navs :', navs);

const App = () => (
  <>
    <Header navs={navs} />
    <Home />
  </>
);

export default App;
