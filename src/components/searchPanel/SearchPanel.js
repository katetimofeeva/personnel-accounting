import { Component } from 'react'

import './searchPanel.css'

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
    }
   
    handelChangeValue = (e)=>{
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        }) 
    }
 
render (){
    
    const {findEmployee} =this.props

    return (
        <input type = 'text'
            placeholder = 'Enter employee name' 
            onChange={this.handelChangeValue}
            onKeyDown={(e)=>e.key === 'Enter' && findEmployee(e.target.value)}/> 
    )
}
}

export default SearchPanel