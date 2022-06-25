import { Component } from 'react'

import './employeesListItem.css'

class EmployeesListItem extends Component{
    

    handelClick =(e)=>{
        const {id}=this.props.staf
        this.props.onToggle(id, e.currentTarget.getAttribute('data-name'))
    }

    handelDelet=()=>{
        const {id}=this.props.staf
        this.props.delete(id)
    }
    

    render(){
        const {name, salary, rise} = this.props.staf
                
        return (
            <li className={rise? 'list-group-item active':'list-group-item'}>
                <span className={this.props.staf.awarded 
                    ? 'name_employee increase'
                    : 'name_employee'}
                    data-name='rise'
                    onClick={this.handelClick}>{name}</span>  
                <input className={this.props.staf.awarded? 'list-group-item-input increase': 'list-group-item-input'} type='text' defaultValue={salary +"$"} />  
                    <div >
                        <button type="button"
                            className="btn-cookie btn-sm "
                            data-name='awarded'
                            onClick={this.handelClick}>
                            <i className="fas fa-cookie"></i>
                            
                        </button>

                        <button type="button"
                                className="btn-trash btn-sm "
                                onClick={this.handelDelet}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                    </div>     
            </li>
        )
    }
}

export default EmployeesListItem