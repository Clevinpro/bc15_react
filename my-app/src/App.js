import React, { Component } from 'react';
import Title from './components/Title/Title';

const arr = [1, 2 ,3];

class App extends Component {
  constructor(){
    this.state = {};
  }
}

const App = () => (
  <>
    App
    <Title text='First' />
    <Title text='Third'>
      <Title text='Second' />
      Children Text
    </Title>
    {arr.length > 2 && (
      <Title
        arr={arr}
        text='Fourth'
        color="blue"
      />
    )}
  </>
);


export default App;