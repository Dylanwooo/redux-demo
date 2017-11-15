/**
 * Created by Dylanwoo on 2017/11/15.
 */
import React,{Component} from 'react'
import Proptypes from 'prop-types'

export default class Todo extends Component{
    render(){
        return(
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed? 'line-through':'none',
                    cursor: this.props.completed? 'default':'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: Proptypes.func.isRequired,
    text: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired
};