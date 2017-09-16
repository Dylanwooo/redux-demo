import TodoAction from '../actions/TodoAction';

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

}
export default Todo;