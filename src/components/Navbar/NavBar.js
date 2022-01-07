import { useState } from 'react';
import "./Navbar.css";

const NavBar = ({allTodos ,CompletedTodos, unCompletedTodos, filterTodos}) => {

const[status, setStatus] = useState("All")

  const changeHandler = (e) => {
    setStatus(e.target.value)
    filterTodos(e.target.value)
}

    if(!unCompletedTodos) return   <h2>set your today todos !</h2>;

    return(
      <header className="navBar">
          <div className="tallys">
            <div className="tally">
             <span>{allTodos}</span> <p>Total</p>
            </div>
            <div className="tally">
             <span>{unCompletedTodos}</span> <p>Remaining</p>
            </div>
            <div className="tally">
             <span>{CompletedTodos}</span> <p>Done</p>
            </div>
          </div>
          <select onChange={changeHandler} value={status} className="selectOption">
            <option value="ALL">ALL</option>
            <option value="completed">completed</option>
            <option value="unCompleted">unCompleted</option>
          </select>
      </header>
    )
}
 
export default NavBar;