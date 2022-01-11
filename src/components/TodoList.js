import React from 'react';
import ToDo from './Todo'
// your components will all go in this `component` directory.

class ToDoList extends React.Component {
    render() {
        return(
            <div className='tdlist'>
                {this.props.todos.map(todo => (
                    <ToDo handleToggleTodo={this.props.handleToggleTodo} key={todo.id} todo={todo} />
                ))}
            </div>
        )
    }
};

export default ToDoList;
