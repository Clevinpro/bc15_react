/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ data, handleEdit }) => (
  <ul>
    {data.map(el => (
      <li onDoubleClick={() => handleEdit(el.id)} key={el.id}>
        {el.text}
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default TodoList;
