/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import s from './TodoList.module.css';

const TodoList = ({ data, handleEdit, listRef }) => (
  <ul className={s.list} ref={listRef}>
    {data.map(el => (
      <li
        className={s.item}
        onDoubleClick={() => handleEdit(el.id)}
        key={el.id}
      >
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
