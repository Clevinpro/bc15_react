import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../UserItem/UserItem';

const UsersList = ({ users }) => (
  <ul>
    {/*
      <UserItem userData={users[0]} />
      <UserItem userData={users[1]} />
      <UserItem userData={users[2]} />
      */}
    {users.length > 0 &&
      users.map(el => <UserItem key={el.id} userData={el} />)}
  </ul>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default UsersList;
