import  {FILTER}  from "./constant"

import './filter.css'

const Filetrs = ( )=>{
    return (
        <li>
            {FILTER.map((btn) => {
                let newBtn = btn[0].toUpperCase() + btn.slice(1);
                return (
                <button  key={btn}> {newBtn}</button>
                 )
             })}
        </li>
    )
    
}

export default Filetrs