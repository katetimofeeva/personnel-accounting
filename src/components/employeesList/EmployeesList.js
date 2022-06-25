

import EmployeesListItem from "../employeesListItem/EmployeesListItem"

import './employeesList.css'

const EmployeesList = ({staf, onDelete, onToggle})=>{
  
    return (
        <ul className='list'>
            {staf.map((item) => {
              
                return (
                    <EmployeesListItem key={item.id} staf={item} delete={onDelete} onToggle={onToggle}/>  
                )
            })}
        </ul>
            
         
    )
}

export default EmployeesList