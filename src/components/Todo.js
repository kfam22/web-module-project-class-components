import React from 'react';
import './Todo.css';

class ToDo extends React.Component{

    // handleclick
    handleClick = () => {
        this.props.handleToggleTodo(this.props.todo);
    }

    render(){
        return(
            <div onClick={this.handleClick} className={this.props.todo.completed ? 'completed' : ''} >
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default ToDo;