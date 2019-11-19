import React, { Component } from 'react';
import { stat } from 'fs';
import BuyController from './components/BuyController/BuyController';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     modalOpen: false,
  //   };
  // }

  state = {
    modalOpen: false,
    cart: 0,
  };

  openModal = e => {
    const { modalOpen } = this.state;
    console.log('e :', e);
    // this.state.modalOpen = true;
    // this.setState({ modalOpen: true });
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
    console.log('modalOpen', modalOpen);
  };

  handleAddToCart = count => {
    this.setState(state => ({ cart: state.cart + count }));
  };

  render() {
    const { modalOpen, cart } = this.state;

    return (
      <>
        {modalOpen && (
          <div style={{ position: 'absolute', left: '100px' }}>modal</div>
        )}
        <button onClick={this.openModal} type="button">
          Open
        </button>
        <BuyController handleAddToCart={this.handleAddToCart} step={5} />
        <BuyController handleAddToCart={this.handleAddToCart} step={3} />
        <BuyController handleAddToCart={this.handleAddToCart} step={1} />
        <span>cart: {cart}</span>
      </>
    );
  }
}

export default App;
