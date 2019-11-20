import React, { Component } from 'react';
import SignUp from './components/SignUp/SignUp';

class App extends Component {
  state = {
    data: {},
  };

  onHandleSubmit = data => {
    this.setState({ data });
  };

  render() {
    console.log('this.state :', this.state);

    return (
      <>
        <SignUp onHandleSubmit={this.onHandleSubmit} />
      </>
    );
  }
}

export default App;
