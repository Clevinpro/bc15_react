import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignUp extends Component {
  static propTypes = {
    onHandleSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    ready: false,
    gender: '',
    city: 'Jmerenka',
  };

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    console.log('e.target.type', e.target.type);
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleGenderChange = e => {
    const { value } = e.target;

    this.setState({ gender: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onHandleSubmit } = this.props;

    console.log('this.state :', this.state);
    onHandleSubmit(this.state);
  };

  render() {
    const { name, email, ready, gender, city } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          onChange={this.handleChange}
          type="text"
          name="name"
        />
        <input
          value={email}
          onChange={this.handleChange}
          type="email"
          name="email"
        />
        <label htmlFor="ready">
          <input
            id="ready"
            onChange={this.handleChange}
            type="checkbox"
            name="ready"
            checked={ready}
          />
          Are you ready ?
        </label>
        <label htmlFor="male">
          <input
            id="male"
            onChange={this.handleGenderChange}
            type="radio"
            value="male"
            checked={gender === 'male'}
          />
          male
        </label>
        <label htmlFor="female">
          <input
            id="female"
            onChange={this.handleGenderChange}
            type="radio"
            value="female"
            checked={gender === 'female'}
          />
          female
        </label>
        <label onChange={this.handleChange} htmlFor="city">
          Select Your City
          <select defaultValue={city} name="city" id="city">
            <option value="Poltava">Poltava</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Jmerenka">Jmerenka</option>
          </select>
        </label>
        <button disabled={!ready} type="submit">
          submit
        </button>
      </form>
    );
  }
}
