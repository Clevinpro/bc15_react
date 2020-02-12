import React, { Component } from 'react'

export default class MoviesDetails extends Component {
  state = {};

  componentDidMount() {
    // fetch
    const { match } = this.props;
    console.log('match :', match);
  }

  render() {
    return (
      <div>
        MoviesDetails
      </div>
    )
  }
}
