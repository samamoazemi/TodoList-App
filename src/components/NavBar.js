import { useState } from "react";

const NavBar = ({unCompletedTodos, filterTodos}) => {

    const[status, setStatus] = useState("All")

    const changeHandler = (e) => {
        setStatus(e.target.value)
        filterTodos(e.target.value)
    }

    if(!unCompletedTodos) return   <h2>set your today todos !</h2>;
    return(
      <header>
        <span>{unCompletedTodos}</span> <h2> are not completed </h2>

        <select onChange={changeHandler} value={status}>
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="unCompleted">unCompleted</option>
        </select>

      </header>
    )
}
 
export default NavBar;