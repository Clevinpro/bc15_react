import React from 'react';
import PropTypes from 'prop-types';
import s from './UserItem.module.css';

const UserItem = ({ userData }) => (
  <li className={s.user__item}>
    <p>{userData.name}</p>
    <p>{userData.email}</p>
    <span>{userData.age}</span>
  </li>
);

UserItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

export default UserItem;
