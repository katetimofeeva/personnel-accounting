import { Component } from "react";
import { nanoid } from 'nanoid'

import Header from "./components/header/Header";
import SearchPanel from "./components/searchPanel/SearchPanel";
import Filetrs from "./components/filters/Filters";
import EmployeesList from "./components/employeesList/EmployeesList";
import AddEmployee from "./components/addEmployee/AddEmployee";

import './app.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      staf: [],
      newName: '',
      filter:''
    }
  }
  
  addStaf=(name, salary)=>{
      this.setState({
      staf: [...this.state.staf, {name, salary, id: nanoid(), awarded: false, rise: false}]
    })
  }

  onDelete=(id)=>{
    console.log( id, 'deleted')
    this.setState(({staf}) => {
      return {
          staf: staf.filter(item => item.id !== id)
      }
    })
  }

  onToggle =(id, prop)=>{
    console.log('yes',  id, prop)
    this.setState(({staf}) => {
       
        return {
          staf: staf.map(item=>{
            if(item.id===id){
              return {...item, [prop]: !item[prop]}
            }
            return item
           })
      }
    })
  }

  findEmployee =(value)=>{
    if (value.length){
      const newName = value
          .split(' ')
          .map(item => item[0].toLocaleUpperCase() + item.slice(1))
          .join(' ')
          .slice(0, 30)
    this.setState({newName})
    } else {
      this.setState({newName: value})
    }   
  }

  searchHuman =(arr, str)=>{
    if(str.length===0){
      return arr
    }

    return arr.filter(item => {
      console.log(item.name)
      return item.name === str})
  }

  getFilter = (filter)=>{
    this.setState({filter})
  }

  filterStaf = (filter, arr)=>{
    switch(filter){
      case 'Employees receiving bonuses':
        return arr.filter(item=>item.awarded)
        
      case 'Salary over 1000$':
        return arr.filter(item=>item.salary > 1000)
       
      default:   
        return arr
    }
  }

  render (){
    const {staf, newName, filter}=this.state
    const totalEmployees =staf.length
    const getAward = staf.filter(item=>item.awarded).length
    const waitRise = staf.filter(item=>item.rise).length
    const visibleEmp = this.filterStaf(filter, this.searchHuman(staf, newName))
       
    return (
      <div className="app">
        <Header totalEmployees={totalEmployees}
                getAward={getAward}
                waitRise={waitRise}/>
        <div className='main'>
          <SearchPanel findEmployee={this.findEmployee}/>
          <Filetrs  onFilter={this.getFilter}/>
        </div>
        <EmployeesList staf={visibleEmp} 
                        onDelete={this.onDelete}
                        onToggle={this.onToggle}/>
        <AddEmployee addStaf={this.addStaf}/>
      </div>
    );
  }
}

export default App;
