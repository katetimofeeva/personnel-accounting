import { Component } from "react"

import  {FILTER}  from "./constant"

import './filter.css'

class Filetrs extends Component{
    constructor(props){
        super(props)
    }

  render(){
    
    return (
        <li>
            {FILTER.map((btn) => {
                let newBtn = btn[0].toUpperCase() + btn.slice(1);
                return (
                <button  key={btn} 
                        onClick={()=>this.props.onFilter(newBtn)}> {newBtn}</button>
                 )
             })}
        </li>
    )
  }
    
}

export default Filetrs