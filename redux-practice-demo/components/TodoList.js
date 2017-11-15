/**
 * Created by Dylanwoo on 2017/11/15.
 */
import React,{Component} from 'react'
import Proptypes from 'prop-types'

import Todo from './Todo'

export default class TodoList extends Component{
    render(){
        return(
            <ul>
                {this.props.todos.map((todo,index)=>
                <Todo {...todo}
                      key={index}
                      onclick={()=>this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}
TodoList.propTypes = {
    onTodoClick: Proptypes.func.isRequired,
    todos: Proptypes.arrayOf(Proptypes.shape({
        text: Proptypes.string.isRequired,
        completed: Proptypes.bool.isRequired
    }).isRequired).isRequired
};

