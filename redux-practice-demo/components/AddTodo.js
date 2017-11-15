/**
 * Created by Dylanwoo on 2017/11/15.
 */
import React,{Component} from 'react'
import Proptypes from 'prop-types'

export default class AddTodo extends Component{
    handleClick(e){
        const node = this.refs.input;
        const text = node.value.trim();   //去除字符两边的空格
        this.props.onAddClick(text);
        node.value = ''                  //输入内容制空
    }

    render(){
        return(
            <div>
                <input type="text" ref='input'/>
                <button onClick={(e)=>this.handleClick(e)}>
                    ADD
                </button>
            </div>
        )
    }
}
AddTodo.propTypes = {
    onAddClick: Proptypes.func.isRequired
};