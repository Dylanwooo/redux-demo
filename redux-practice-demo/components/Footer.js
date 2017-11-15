/**
 * Created by Dylanwoo on 2017/11/15.
 */
import React,{Component} from 'react'
import Proptypes from 'prop-types'

export default class Footer extends Component{
    renderFilter(filter,name){
        if(filter === this.props.filter){
            return name
        }
        return(
            <a href="#" onClick={e=>{
                e.preventDefault();
                this.props.onFilterChange(filter)
            }}>
                {name}
            </a>
        )
    }
    render(){
        return(
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL','All')}
                {' '}
                {this.renderFilter('SHOW_COMPLETED','Completed')}
                {','}
                {this.renderFilter('SHOW_ACTIVE','Active')}
            </p>
        )
    }
}

Footer.propTypes = {
    onFilterChange: Proptypes.func.isRequired,
    filter: Proptypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};