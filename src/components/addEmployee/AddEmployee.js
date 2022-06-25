import {Component} from 'react'

import './addEmployee.css'

class AddEmployee extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            salary: ''
        }
    }
 
    handleChange=(e)=>{
        if (e.target.name === 'name'){
            this.setState({
            [e.target.name]: e.target.value.replace(/[^a-zа-яё\s]/gi, '')
        })
        }else {
            this.setState({
                        [e.target.name]: e.target.value 
                    })
        }             
    }

    handleClick=(e)=>{
        e.preventDefault()
        const {name, salary} = this.state
        
        if( name.trim() &&  salary &&  salary>0 && salary<99000 ){
            const {name, salary} = this.state
            const newName = name
            .split(' ')
            .map(item => item[0].toLocaleUpperCase() + item.slice(1))
            .join(' ')
            .slice(0, 30)
                  
            this.props.addStaf( newName, salary)
        }
       
        this.setState({
            name: '',
            salary:''
        })
    }

    render (){
        const {name, salary} = this.state
     
        return (
            <div className='addEmployee'>
               <h2>Add employee</h2> 
               <form >
                    <input type="text"
                     placeholder='What`s your name?'
                     value={name.toLocaleLowerCase()}
                     onChange={this.handleChange}
                     name='name'/>
                    <input type="number"
                     placeholder='What salary do you have?'
                     value={salary} 
                     onChange={this.handleChange}
                     name='salary'/>
                    <button onClick={this.handleClick}>Add employee</button>
                </form> 
            </div>
        )
    }
}

export default AddEmployee