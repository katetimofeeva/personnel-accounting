import './header.css'

const Header =({totalEmployees, getAward, waitRise}) => {
     
    return (
        <div className = 'header'>
            <h1>Employee accounting</h1>
            <h2>Total numberof employees in the company: {totalEmployees}</h2>
            <h2>Number of employees awarded: {getAward} </h2>
            <h2>Employees are waiting for a raise: {waitRise}</h2>
        </div>
        
    )
}

export default Header