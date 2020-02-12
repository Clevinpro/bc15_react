import React, { Component } from 'react';
import uuid from 'uuid/v1';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  state = {
    data: [],
    editTodo: null,
  };

  listRef = React.createRef();

  addTodo = todo => {
    const newTodo = {
      id: uuid(),
      text: todo,
    };

    this.setState(state => ({
      data: [...state.data, newTodo],
    }));
  };

  updateTodo = updTodoData => {
    console.log('updTodo :', updTodoData);
    const { data } = this.state;
    const newData = data.map(el => {
      if (el.id === updTodoData.id) {
        return updTodoData;
      }

      return el;
    });

    this.setState({ data: newData, editTodo: null });
  };

  handleEdit = id => {
    const { data } = this.state;

    const editTodo = data.find(el => el.id === id);
    console.log('editTodo', editTodo);
    this.setState({ editTodo });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevState.data.length < this.state.data.length) {
      const list = this.listRef.current;
      return list.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Если снимок (snapshot) передан, значит элементы добавлены.
    // Выравниваем прокрутку так, чтобы новые элементы не выталкивали старые.
    // (снимок – значение, переданное из getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      console.log('list', list);
      console.log('snapshot :', snapshot);
      // list.scrollTop = snapshot + 18;
    }
  }

  render() {
    console.log('this.state :', this.state);
    const { data, editTodo } = this.state;

    return (
      <>
        <TodoForm
          updateTodo={this.updateTodo}
          editTodo={editTodo}
          addTodo={this.addTodo}
        />
        <TodoList
          listRef={this.listRef}
          handleEdit={this.handleEdit}
          data={data}
        />
      </>
    );
  }
}

export default App;
