import React from 'react';
import UsersList from './components/UsersList/UsersList';

const users = [
  {
    id: 1,
    name: 'User 1',
    email: 'mail_1@mail.com',
    age: 30,
  },
  {
    id: 2,
    name: 'User 2',
    email: 'mail_2@mail.com',
    age: 18,
  },
  {
    id: 3,
    name: 'User 3',
    email: 'mail_3@mail.com',
    age: 18,
  },
  {
    id: 4,
    name: 'User 4',
    email: 'mail_4@mail.com',
    age: 18,
  },
];

const App = () => (
  <>
    <UsersList users={users} />
  </>
);

export default App;
