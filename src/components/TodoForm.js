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
        this.props.handleAddTodo(this.state.input);
        this.setState({
            input: ''
        });
        
    }

    render(){
        return(
            <div className='header'>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='enter tasks' onChange={this.handleChange} type='text' name='todo' value={this.state.input}></input>
                    <button>add todo</button>
                </form>
                </div>

                <div>
                <button onClick={this.props.handleClearCompleted} >clear completed</button>
                </div>
            </div>
        );
    }
}

export default TodoForm;