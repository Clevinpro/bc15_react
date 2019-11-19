import React, { Component } from 'react';

class BuyController extends Component {
  state = {
    count: 0,
    step: this.props.step,
  };

  onIncrement = () => {
    const { step } = this.state;
    this.setState(prevState => ({
      count: prevState.count + step,
    }));
  };

  onDecrement = () => {
    const { step } = this.state;
    this.setState(prevState => {
      if (prevState.count !== 0) {
        return {
          count: prevState.count - step,
        };
      }
    });
  };

  addToCart = () => {
    const { handleAddToCart } = this.props;
    const { count } = this.state;

    handleAddToCart(count);
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.onDecrement} type="button">
          -
        </button>
        <span>{count}</span>
        <button onClick={this.onIncrement} type="button">
          +
        </button>
        <button onClick={this.addToCart} type="button">
          Add to cart
        </button>
      </div>
    );
  }
}

export default BuyController;
