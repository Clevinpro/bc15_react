import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';
import * as API from '../../services/api';

export default class Home extends Component {
  state = {
    popular: []
  };

  componentDidMount() {
    API.getPopular().then(resData => {
      console.log('resData :', resData);
      this.setState({ popular: resData.data.results })
    })
  }

  render() {
    const {popular} = this.state;
    return (
      <div>
        Home
        {/*  map popular films */}
        {popular.map(el => (
         <li><Link to={`${ROUTES.MOVIES}/${el.id}`}> {el.title} </Link></li>
        ))}
      </div>
    )
  }
}
