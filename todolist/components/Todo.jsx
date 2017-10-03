import React from 'react';
import TodoAction from '../actions/TodoAction';
import TodoStore from '../stores/TodoStore';
import CreateButton from './CreateButton';
import List from './List';
import uuid from 'uuid';


class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todos: TodoStore.getAll()
        };
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.onChange = this.onChange.bind(this);
    };
    componentDidMount(){
        TodoStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        TodoStore.removeChangeListener(this.onChange);
    }
    onChange(){
        this.setState({
            todos:TodoStore.getAll()
        })
    }
    createTodo(){
        TodoAction.create({id:uuid.v4(),content:'3rd stuff'});
    };
    deleteTodo(id){
        TodoAction.delete(id);
    }
    render(){
        return(
            <div>
                <List items={this.state.todos} onDelete={this.deleteTodo()} />
                <CreateButton onCLick={this.createTodo}/>
            </div>
        )
    }

}
export default Todo;