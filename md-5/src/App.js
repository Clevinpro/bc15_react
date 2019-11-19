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
    const { data } = this.state;
    console.log('this.state :', this.state);

    return (
      <>
        {!data.email && <SignUp onHandleSubmit={this.onHandleSubmit} />}
        {data.email && <div>Hello {data.name}</div>}
      </>
    );
  }
}

export default App;
