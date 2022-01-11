import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: '',
        }
    }

    // update state with each keystroke (handle change)
    handleChange = e => {
        this.setState({
            ...this.state,
            input: e.target.value,
        })
    }

    // handle submit (update class property to complete form) set state in app.js and pass function through props
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' name='todo'></input>
                    <button>Add Todo</button>
                </form>
                <button>Clear Completed</button>
            </div>
        );
    }
}

export default TodoForm;