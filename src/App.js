import React from 'react';
import TodoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // clear todo

  // toggle todo
  handleToggleTodo = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === selectedTodo.id){
          return({
            ...todo,
            completed: !todo.completed
          })
        }else{
          return todo;
        }
      })
    })
  } 

  // add todo
  handleAddTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  // 
  render() {
    return (
      <div>
        <ToDoList handleToggleTodo={this.handleToggleTodo} todos={this.state.todos} />
        <TodoForm handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
